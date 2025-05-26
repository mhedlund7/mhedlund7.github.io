# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, Three.js, and other modern web technologies. Features a beautiful animated background and smooth transitions.

## Features

- Interactive 3D background using Three.js
- Responsive design
- Smooth animations using Framer Motion
- Separate pages for Home and Projects
- PDF resume download capability
- Easy deployment to GitHub Pages

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add your resume:
   - Save your resume as a PDF file
   - Name it `resume.pdf`
   - Place it in the `public` directory

4. Customize the content:
   - Update your name and description in `src/pages/Home.tsx`
   - Add your projects in `src/pages/Projects.tsx`
   - Customize styles and colors as needed

5. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Update the `vite.config.ts` file to add your repository base URL:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```
3. Push your code to GitHub
4. Enable GitHub Pages in your repository settings
5. Deploy using:
   ```bash
   npm run build
   npm run deploy
   ```

## Technologies Used

- React
- TypeScript
- Three.js
- React Three Fiber
- Framer Motion
- Emotion (Styled Components)
- Vite

## Folder Structure

```
personal-portfolio/
├── public/
│   └── resume.pdf        # Add your resume here
├── src/
│   ├── components/
│   │   ├── Background.tsx
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── Projects.tsx
│   ├── types/
│   │   └── maath.d.ts
│   └── App.tsx
└── README.md
```

## Customization

Feel free to customize the website by:
- Updating the color scheme in the styled components
- Modifying the 3D background animation parameters
- Adding more pages or sections
- Customizing the layout and styling

## License

MIT
