# Netflix Clone - Web3 DVC Workshop 2026

A Netflix home page emulator built with React for the Web3 DVC Workshop 2026.

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── layout/         # Layout components (Navbar, Footer)
│   └── content/        # Content components (MovieCard, ContentRow, Hero)
├── pages/              # Page components
├── data/               # Mock data and constants
├── styles/             # CSS files
└── assets/             # Images, icons, etc.
```

## Getting Started

### Prerequisites

Make sure you have Node.js installed (v16 or higher).

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build

## Features

- Netflix-style UI with dark theme
- Responsive navbar with scroll effects
- Hero banner section
- Horizontally scrollable content rows
- Movie card hover effects
- Fully responsive design

## Tech Stack

- React 18
- Vite (Build tool)
- React Router (For routing)
- CSS3 (Styling)

## Team Collaboration

This is the base setup for the Web3 DVC Workshop 2026. Team members can now:
- Add new components in `src/components/`
- Create new pages in `src/pages/`
- Add shared styles in `src/styles/`
- Work on different features independently

## Next Steps

- [ ] Add React Router for navigation
- [ ] Implement search functionality
- [ ] Add user authentication
- [ ] Connect to a movie database API
- [ ] Add video player functionality
