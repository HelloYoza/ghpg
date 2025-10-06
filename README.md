# Ghan Property Group

A modern, responsive website for Ghan Property Group built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎥 **Video Background Hero Section** - Dynamic video background with typing animation
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Next.js for optimal speed
- 🎨 **Modern Design** - Clean, professional UI with Tailwind CSS
- 🔤 **Custom Typography** - Poppins font family throughout
- 🎭 **Smooth Animations** - Scroll-triggered animations and transitions

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Poppins
- **Deployment**: GitHub Pages / Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HelloYoza/ghpg.git
cd ghpg
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Quick Deploy

Use the included deployment script:

```bash
./deploy.sh
```

### Manual Deploy

1. Add and commit your changes:
```bash
git add .
git commit -m "Your commit message"
```

2. Push to GitHub:
```bash
git push origin main
```

## Project Structure

```
ghpg/
├── src/
│   └── app/
│       ├── about/          # About page
│       ├── contact/        # Contact page
│       ├── chatbot/        # Chatbot page
│       ├── portfolio/      # Portfolio page
│       ├── services/       # Services pages
│       └── page.tsx        # Home page
├── public/
│   ├── videos/            # Video assets
│   └── images/            # Image assets
├── deploy.sh              # Deployment script
└── README.md              # This file
```

## Pages

- **Home** (`/`) - Hero section with video background and typing animation
- **About** (`/about`) - Company information and stats
- **Services** (`/services`) - Service offerings and details
- **Portfolio** (`/portfolio`) - Project showcase
- **Contact** (`/contact`) - Contact form and information
- **Chatbot** (`/chatbot`) - AI assistant interface

## Customization

### Changing the Video Background

1. Replace the video file in `public/videos/`
2. Update the video path in `src/app/page.tsx`

### Updating Company Information

- Company name: Update `fullText` variable in `src/app/page.tsx`
- Contact info: Update footer sections across pages
- Services: Modify service pages in `src/app/services/`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Ghan Property Group.

## Contact

For questions or support, please contact the development team.

---

Built with ❤️ for Ghan Property Group