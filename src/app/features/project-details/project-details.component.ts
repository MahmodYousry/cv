import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked, Renderer } from 'marked';
import GithubSlugger from 'github-slugger';
import { ProjectsService } from '../../core/services/projects.service';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsService);
  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);

  project: Project | undefined;
  readmeHtml: SafeHtml | null = null;
  loading = true;
  readmeError = false;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.project = this.projectsService.getBySlug(slug);

    if (!this.project?.slug) {
      this.loading = false;
      return;
    }

    this.http.get(`/project-docs/${this.project.slug}/README.md`, { responseType: 'text' }).subscribe({
      next: (md) => {
        const html = this.renderReadme(md);
        this.readmeHtml = this.sanitizer.bypassSecurityTrustHtml(html);
        this.loading = false;
      },
      error: () => {
        this.readmeError = true;
        this.loading = false;
      },
    });
  }

  /** Keep TOC hash links on-page; block relative repo links from hitting Angular routes. */
  onReadmeClick(event: MouseEvent): void {
    const anchor = (event.target as HTMLElement | null)?.closest('a');
    if (!anchor) {
      return;
    }

    const href = anchor.getAttribute('href');
    if (!href) {
      return;
    }

    if (href.startsWith('#')) {
      event.preventDefault();
      const id = decodeURIComponent(href.slice(1));
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    if (this.isExternalUrl(href)) {
      return;
    }

    // Relative README links (LICENSE, docs/..., ./foo) would resolve under /projects/:slug
    event.preventDefault();
  }

  private renderReadme(md: string): string {
    const slugger = new GithubSlugger();
    const renderer = new Renderer();

    renderer.heading = function ({ tokens, depth, text }) {
      const id = slugger.slug(text);
      const body = this.parser.parseInline(tokens);
      return `<h${depth} id="${id}">${body}</h${depth}>\n`;
    };

    renderer.link = function ({ href, title, tokens }) {
      const body = this.parser.parseInline(tokens);
      const titleAttr = title ? ` title="${title}"` : '';
      if (/^https?:\/\//i.test(href ?? '')) {
        return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer">${body}</a>`;
      }
      return `<a href="${href ?? ''}"${titleAttr}>${body}</a>`;
    };

    return marked.parse(md, { renderer, async: false }) as string;
  }

  private isExternalUrl(href: string): boolean {
    return /^(https?:|mailto:|tel:)/i.test(href);
  }
}
