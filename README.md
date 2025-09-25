# Next.js Project Setup and Basics.

This project is a comprehensive introduction to setting up and working with Next.js, TypeScript, and Tailwind CSS. It guides you through creating a modern web application with reusable components, routing, API integration, and proper project structure. The project covers fundamental concepts from initial setup to building interactive components and fetching data from external APIs.

Project Structure

```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```


## Setup

Clone the repository: git clone <repo-url>

Install dependencies: npm install


Start the development server: npm run dev


Open http://localhost:3000 in your browser.


## Tech Stack

[Next.js](https://nextjs.org/)

[TypeScript](https://www.typescriptlang.org/)

[Tailwind CSS](https://tailwindcss.com/)

[JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

## Usage

/home: View static job role cards and create new posts.

/about: Learn about the app and explore buttons.

/posts: View posts fetched from JSONPlaceholder.


