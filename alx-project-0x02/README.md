# Job Explorer
A Next.js application to explore job roles and share posts, built with TypeScript and Tailwind CSS.
## Features

View job role descriptions on the Home page.
Create posts via a modal with dynamic rendering.
Fetch and display posts from JSONPlaceholder API.
Reusable components: Card, Button, PostCard.
Responsive design with Tailwind CSS.

## Setup

Clone the repository: git clone <repo-url>
Install dependencies: npm install
Start the development server: npm run dev
Open http://localhost:3000 in your browser.

## File Structure

pages/: Next.js pages (home.tsx, about.tsx, posts.tsx).
components/common/: Reusable components (Card.tsx, Button.tsx, PostCard.tsx, PostModal.tsx).
components/layout/: Layout components (Header.tsx).
interfaces/: TypeScript interfaces (index.ts).
styles/: Global styles (globals.css).

## Tech Stack

Next.js (Pages Router)
TypeScript
Tailwind CSS
JSONPlaceholder API

## Usage

/home: View static job role cards and create new posts.
/about: Learn about the app and explore buttons.
/posts: View posts fetched from JSONPlaceholder.
