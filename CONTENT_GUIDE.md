# Kishore Kumar A - Personal Website

## Overview

This is my personal portfolio and blog website built with Astro, showcasing my work in AI, machine learning, and data science.

## Quick Start

### Development
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm run preview
```

## Content Management

### Adding Blog Posts

1. **Create a new article** in `src/content/articles/`
2. **Use the frontmatter template**:

```yaml
---
title: "Your Article Title"
path: "/articles/your-article-slug/"
date: 2024-12-19
last_modified_at: 2024-12-19T12:00:00-05:00
excerpt: "Brief description of your article"
image: "/images/articles/your-image.jpg"
categories: ["AI", "Machine Learning"]
tags: ["Python", "TensorFlow", "Deep Learning"]
toc: true
featured: true
draft: false
---
```

3. **Write your content** in Markdown/MDX
4. **Add images** to `public/images/articles/`

### Adding Projects

1. **Create a new project** in `src/content/works/`
2. **Use the frontmatter template**:

```yaml
---
title: "Project Name"
path: "/works/project-slug/"
date: 2024-12-19
last_modified_at: 2024-12-19T12:00:00-05:00
excerpt: "Brief description of your project"
image: "/images/works/project-image.jpg"
categories: ["AI", "Web Development"]
tags: ["React", "Python", "Machine Learning"]
featured: true
draft: false
---
```

### Adding Notes

1. **Create a new note** in `src/content/notes/`
2. **Use the same frontmatter** as articles but with `path: "/notes/your-note-slug/"`

## Image Management

### Supported Formats
- JPG/JPEG
- PNG
- WebP
- SVG

### Image Locations
- **Blog images**: `public/images/articles/`
- **Project images**: `public/images/works/`
- **Profile images**: `public/images/`
- **Theme images**: `public/images/theme/`

### Using Images in Content

```markdown
![Alt text](/images/articles/your-image.jpg)
```

## Content Collections

### Articles (`src/content/articles/`)
- Technical blog posts
- Tutorials and guides
- Research insights
- Industry analysis

### Works (`src/content/works/`)
- Project showcases
- Portfolio pieces
- Case studies
- Technical implementations

### Notes (`src/content/notes/`)
- Quick thoughts
- Short tutorials
- Code snippets
- Learning notes

## Deployment

### GitHub Pages (Current Setup)

1. **Push to main branch**
2. **GitHub Actions automatically builds and deploys**
3. **Site available at**: `https://kishore2494.github.io`

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## Customization

### Site Configuration
Edit `src/config/site.js` for:
- Site title and description
- Social media links
- Contact information
- Menu structure

### Styling
- **Global styles**: `src/styles/`
- **Component styles**: Co-located with components
- **CSS variables**: `src/styles/variables.modules.css`

### Components
- **Layout components**: `src/layouts/`
- **UI components**: `src/components/`
- **Custom components**: `src/components/custom/`

## SEO Features

- **Meta tags**: Automatic generation
- **Open Graph**: Social media sharing
- **Sitemap**: Auto-generated
- **RSS feed**: Available at `/rss.xml`
- **Structured data**: JSON-LD support

## Analytics

Currently configured for:
- Google Analytics 4
- Microsoft Clarity
- Privacy-focused implementation

## Performance

- **Static generation**: Fast loading
- **Image optimization**: Automatic compression
- **Code splitting**: Efficient bundling
- **PWA support**: Offline capability

## Troubleshooting

### Common Issues

1. **Build errors**: Check frontmatter syntax
2. **Images not loading**: Verify file paths
3. **Styling issues**: Check CSS imports
4. **Deployment failures**: Check GitHub Actions logs

### Getting Help

- Check Astro documentation
- Review GitHub Issues
- Contact: akishorekumar2494@gmail.com

## File Structure

```
src/
├── components/          # Reusable components
├── content/            # Content collections
│   ├── articles/       # Blog posts
│   ├── works/          # Project showcases
│   └── notes/          # Quick notes
├── layouts/            # Page layouts
├── pages/              # Route definitions
├── styles/             # CSS styles
└── config/             # Site configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

*This documentation is regularly updated. For the latest version, check the repository.*
