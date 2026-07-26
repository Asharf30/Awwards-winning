🎮 Zentry — Gaming Metaverse Landing Page

An interactive, animation-rich landing page for Zentry, a cross-platform gaming metaverse. Built with React, TypeScript, and Tailwind CSS v4, and brought to life with GSAP scroll-triggered animations, a tilt-responsive bento grid, and fully lazy-loaded media for smooth performance.

🔗 Live Demo

View on Awwwards ↗

✨ Features
🎬 Cinematic Hero Section — interactive video switcher with smooth clip-path transitions
🧩 Animated Bento Grid — mouse-tracking tilt effect with dynamic glow/sheen on hover
📜 Scroll-Triggered Animations — powered by GSAP + ScrollTrigger (pinning, scrubbing, word-by-word title reveals)
🖱️ 3D Tilt Interaction on the Story section image frame
⚡ Lazy-Loaded Media — custom LazyImage and LazyVideo components using Intersection Observer, with shimmer skeleton placeholders
📱 Fully Responsive navbar with auto-hide on scroll direction
🎨 Custom Design System — Tailwind v4 theme with custom fonts (Zentry, Circular Web, General, Robert) and color tokens
🌀 Code-split, lazy-loaded sections for optimized initial load
🛠️ Tech Stack
Category	Technology
Framework	React (Vite)
Language	TypeScript / JavaScript
Styling	Tailwind CSS v4
Animation	GSAP, @gsap/react, ScrollTrigger
Icons	react-icons
Utilities	react-use
📁 Project Structure
src/
├── component/
│   ├── Navbar.tsx
│   ├── Button.tsx
│   ├── AnimatedTitle.tsx
│   ├── About.tsx
│   ├── Features.tsx
│   ├── Story.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── LazyImage.tsx
│   ├── LazyVideo.tsx
│   └── Rounded.jsx
├── Hero.tsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
🚀 Getting Started
bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Run the development server
npm run dev
📄 License

This project is open source and available for personal or educational use.

Made with ❤️ by Ashraf
