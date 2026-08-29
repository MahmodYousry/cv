<div align="center">

# MrMath

### Educational Platform for Courses, Quizzes & Student Learning

A bilingual (Arabic / English) Laravel platform for math tutoring — manage courses, videos, quizzes, posts, and students from one place.

[![Laravel](https://img.shields.io/badge/Laravel-12.x-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![PHP](https://img.shields.io/badge/PHP-8.2+-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/)
[![Livewire](https://img.shields.io/badge/Livewire-3-FB70A9?style=for-the-badge&logo=livewire&logoColor=white)](https://laravel-livewire.com)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)

**[Live site](https://mrmathematica.com)** ·
[Overview](#overview) ·
[Features](#features) ·
[Roles](#roles--access) ·
[Stack](#technology-stack)

</div>

---

## Overview

**MrMath** is a full educational management system for online math learning. Admins publish grade-scoped content; verified students enroll in courses, watch videos (with in-video questions), take quizzes, read posts, and download materials.

| | Highlight |
|---|-----------|
| | **Arabic & English** with session + cookie persistence |
| | **OneUI admin** + responsive Bootstrap 5 front |
| | Auth, email verification, Google OAuth, rate limits |
| | Quiz results, enrollment control, approval workflows |
| | Public read-only REST API + interactive Swagger UI |
| | Caching, queues, image processing, structured logging |

---

## Features

### Admin panel

| Feature | Description |
|---------|-------------|
| **Dashboard** | Overview of platform activity |
| **Students** | List, create & manage student accounts |
| **Courses** | CRUD courses, images, pricing, grade scope, approve |
| **Videos** | Nested course videos + attach/detach questions |
| **Question bank** | Questions (optional images) & multiple-choice answers |
| **Quizzes** | Timed / scheduled quizzes, approve, attach questions |
| **Quiz results** | Per student → quizzes → answers; reset attempts |
| **Posts** | Grade-scoped announcements with approval |
| **Attachments** | Upload & manage downloadable files by grade |
| **Contact inbox** | View & delete public contact submissions |
| **Enrollment control** | Allow / deny student access per course |

### Student experience

| Feature | Description |
|---------|-------------|
| **Overview** | Personal dashboard home |
| **My courses** | Enrolled courses & progress |
| **Video player** | Watch lessons with in-video Q&A |
| **Quizzes** | Start timed quizzes & submit answers |
| **Posts** | Read approved educational posts |
| **Attachments** | Download grade-scoped materials |
| **Search** | Find courses, posts & quizzes |
| **Settings** | Livewire profile (name, email, phone, grade, password) |

### Public & auth

| Feature | Description |
|---------|-------------|
| **Landing page** | Marketing home, courses listing, contact form |
| **Auth** | Register, login, email verify, password reset |
| **Google OAuth** | Sign in with Google (Socialite) |
| **Locale switch** | English / Arabic |

### Platform capabilities

- RESTful API (`/api/v1`) with Swagger documentation
- Queue jobs for contact email, image processing, and quiz reports
- Automatic image optimization & resizing
- Caching for approved courses, posts & quizzes
- CSRF, XSS hardening, secure headers, and rate limiting

---

## Roles & Access

| Role | Who | Access |
|------|-----|--------|
| **Admin** | Platform managers | Full admin panel |
| **Student** | Learners (default) | Verified student dashboard & course player |

- Content is filtered by approval status and grade
- Course access uses an enrollment allow / deny workflow

---

## Technology Stack

| Backend | Frontend |
|---------|----------|
| PHP 8.2+ | Blade templates |
| Laravel 12 | Bootstrap 5 |
| Laravel UI + Sanctum | Vite + Sass |
| Socialite (Google) | OneUI admin theme |
| Livewire 3 | Axios |
| Spatie Translatable | |

Admin is custom Blade on OneUI (no Filament / Nova / Inertia).

---

## Live project

**Website:** [https://mrmathematica.com](https://mrmathematica.com)

Built by **Mahmoud Yousry** with Laravel · Livewire · Bootstrap.
