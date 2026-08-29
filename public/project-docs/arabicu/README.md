<div align="center">

# ArabicU

### Online Arabic & Quran Learning Platform

**Learn Arabic · Take Quizzes · Track Progress**

[![Laravel](https://img.shields.io/badge/Laravel-8.x-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![PHP](https://img.shields.io/badge/PHP-7.3%20%7C%208.0-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net)
[![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)

**[Live site](https://arabicu.net)** ·
[About](#about) ·
[Features](#features) ·
[Roles](#user-roles) ·
[Stack](#tech-stack)

</div>

---

## About

**ArabicU** is a bilingual (Arabic / English) web platform for online Arabic and Quran learning. It combines a public marketing front with a full **quiz & exam system**, an **admin dashboard**, and **student result tracking**.

Admins manage quiz levels, quizzes, questions (with images), answers, and students. Students browse levels, take timed exams, and submit answers. Contact inquiries land in an admin inbox.

---

## Features

### Public front

| Feature | Description |
|---------|-------------|
| **Landing page** | Branded home with courses overview and CTAs |
| **Bilingual UI** | Arabic & English via locale-aware routes |
| **Contact form** | Name, email, phone, age, gender, nationality, message |
| **Responsive design** | Mobile-friendly front with carousel & animations |

### Student area

| Feature | Description |
|---------|-------------|
| **Authentication** | Login, register, password reset |
| **Quiz levels** | Browse study / quiz levels |
| **Take quizzes** | Open quizzes under a level and answer questions |
| **Image questions** | Questions may include uploaded images |
| **Answer submit** | AJAX submit with scoring |
| **Quiz timer** | Optional time limit per quiz |
| **Retake answers** | Previous answers for a question can be replaced |

### Admin dashboard

| Feature | Description |
|---------|-------------|
| **Dashboard** | Admin home with themed sidebar |
| **Quiz levels CRUD** | Create and manage levels |
| **Quizzes CRUD** | Name, description, text, time, level links |
| **Questions & answers** | Multiple answers per question; mark correct |
| **Question images** | Upload and delete question images |
| **Students CRUD** | List, add, and edit students |
| **Quiz results** | Per student → quizzes → question-level detail |
| **Contact inbox** | View submitted contact messages |
| **Theme switcher** | Dashboard color themes & layout styles |

### Security & access

| Feature | Description |
|---------|-------------|
| **Role-based access** | Admin vs student middleware |
| **Auth guards** | Laravel UI auth + admin-only routes |
| **API tokens ready** | Laravel Sanctum |

---

## User Roles

| Role | Access |
|------|--------|
| **Admin** | Full dashboard: levels, quizzes, questions, students, results, inbox |
| **Student** | Front site, quiz levels, take exams, submit answers |
| **Guest** | Landing page, contact form, login / register |

Supported locales: **English (`en`)** · **Arabic (`ar`)**

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Laravel 8 |
| Language | PHP 7.3 / 8.0+ |
| Database | MySQL |
| Auth | Laravel UI · Sanctum |
| Live UI | Livewire 2 |
| i18n | mcamara/laravel-localization · Spatie Translatable |
| Front | Bootstrap 5 · Vue 2 · Laravel Mix |

---

## Live project

**Website:** [https://arabicu.net](https://arabicu.net)

**ArabicU** · Built with Laravel by **Mahmoud Yousry**.
