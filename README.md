# Devanta Lifesciences - React Application

A modern React application for Devanta Lifesciences, a pharmaceutical, veterinary, and feed raw materials trading & sourcing company.

## Features

- ✨ Modern React 18 with Vite
- 🎨 Fully responsive design for all devices
- 🧭 React Router for client-side routing
- 📱 Mobile-friendly navigation with hamburger menu
- 🎯 Component-based architecture
- 🚀 Fast development and build times

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Building for Production

Build the production-ready application:
```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable React components
│   ├── Header.jsx   # Navigation header
│   ├── Footer.jsx   # Site footer
│   └── Layout.jsx   # Page layout wrapper
├── pages/           # Page components
│   ├── Home.jsx     # Homepage
│   ├── About.jsx    # About page
│   ├── Products.jsx # Products page
│   ├── Industries.jsx # Industries page
│   ├── Quality.jsx  # Quality page
│   └── Contact.jsx  # Contact page
├── App.jsx          # Main app component with routing
├── main.jsx         # Application entry point
└── styles.css       # Global styles

```

## Pages

- **Home** (`/`) - Main landing page with hero section and highlights
- **About** (`/about`) - Company overview, vision, and mission
- **Products** (`/products`) - Product portfolio and categories
- **Industries** (`/industries`) - Industries served
- **Quality** (`/quality`) - Quality assurance and compliance
- **Contact** (`/contact`) - Contact form and location

## Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS custom properties

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Devanta Lifesciences. All rights reserved.
