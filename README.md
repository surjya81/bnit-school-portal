# BNIT Public School Website

## Project Overview

This website is a responsive, modern school website built using React and Tailwind CSS. The website showcases school information, announcements, events, and provides quick navigation for students, parents, and staff.

## Features

- Responsive mobile-friendly design
- Dynamic navigation with mobile menu toggle
- Sections for:
  - Announcements
  - Upcoming Events
  - Quick Links
  - School Features
- Detailed footer with contact information and social links

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)

## Technology Stack

- React
- Tailwind CSS
- Lucide React Icons

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/excellence-academy-website.git
cd excellence-academy-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Additional Packages

```bash
npm install lucide-react tailwindcss
```

### 4. Configure Tailwind CSS

Create a `tailwind.config.js` file in the project root:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    extend: {} 
  },
  plugins: [],
}
```

### 5. Add Tailwind to CSS

In `src/index.css`, add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Run the Development Server

```bash
npm start
```

The website will be available at `http://localhost:3000`

## Project Structure

```
excellence-academy-website/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── logos
│   │
│   ├── components/
│   │   └── SchoolWebsite.js
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── tailwind.config.js
```

## Deployment

To create a production build:

```bash
npm run build
```

The optimized production build will be in the `build/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - surjya81

Project Link: []