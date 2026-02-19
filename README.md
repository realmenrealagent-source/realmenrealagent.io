# TEAM RAYAN AGENTS Portfolio

Single-page portfolio for TEAM RAYAN AGENTS featuring web development and graphic design services.

## Stack
- React 18 + Vite 7 + TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Hook Form + Zod (validation)
- Swiper (carousel)
- React Router v6
- EmailJS (contact integration)

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5174/`

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

5. Run linting:
   ```bash
   npm run lint
   ```

## Project Structure

```
src/
├── components/        # React components
│   ├── chat/         # Chat window components
│   ├── contact/      # Contact form
│   ├── home/         # Home page sections
│   ├── layout/       # Layout components (navbar, footer)
│   ├── portfolio/    # Portfolio sections
│   └── testimonials/ # Testimonials display
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── styles/           # CSS files
├── data/             # JSON data (projects, testimonials)
├── assets/           # Images and fonts
└── App.tsx           # Main app component
```

## Configuration

### Hero Section Image
Replace the placeholder with your actual image:
- Path: `src/assets/images/hero/rayan-placeholder.svg`

### Social Links
Update social media URLs in:
- File: `src/components/layout/Footer.tsx`

### Contact Form
To enable email functionality with EmailJS:
1. Set up an EmailJS account at https://emailjs.com
2. Update credentials in `src/components/contact/ContactForm.tsx`
3. Test the form to verify email delivery

### Live Chat
Current implementation stores messages in localStorage. To add email notifications:
1. Create a backend endpoint to handle new messages
2. Update `src/components/chat/LiveChat.tsx` to post new messages to your endpoint
3. Configure email notifications on the backend

## VS Code Tasks

Available tasks in `.vscode/tasks.json`:
- **Build Project** (Ctrl+Shift+B): Build for production
- Use Command Palette (Ctrl+Shift+P) → "Tasks: Run Task" to see all options

## Troubleshooting

- **Port 5174 already in use**: Vite will automatically try the next available port
- **Build CSS warnings**: Ensure @import statements come before other CSS rules
- **Node modules issues**: Delete `node_modules/` and `package-lock.json`, then run `npm install` again

## Next Steps

1. Customize colors and themes in Tailwind configuration
2. Add your portfolio projects to `src/data/projects.json`
3. Update client testimonials in `src/data/testimonials.json`
4. Replace placeholder images with actual assets
5. Deploy to your hosting platform
