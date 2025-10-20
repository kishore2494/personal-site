# Kishore Kumar A - Personal Portfolio

This is the source code of my personal portfolio and blog website, showcasing my work in AI, machine learning, and data science.

## About Me

AI and Data Science graduate specializing in building AI agents, fine-tuning LLMs, and implementing RAG pipelines. Experienced in developing real-world AI solutions across voice automation, multi-agent systems, and deep learning.

## Getting Started

1. **Install dependencies**
  
   ```shell
   npm install
   ```

2. **Start developing**
  
   ```shell
   npm run dev
   ```

3. **Build for production**
  
   ```shell
   npm run build
   ```

## Project Structure

```bash
.
├── public
│   └── images/            # Static images and assets
├── src
│   ├── content/           # Content collections
│   │   ├── articles/      # Blog posts
│   │   ├── works/         # Project showcases
│   │   └── notes/         # Quick notes
│   ├── components/        # Reusable components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route definitions
│   ├── styles/           # CSS styles
│   └── config/           # Site configuration
├── astro.config.mjs      # Astro configuration
└── package.json          # Dependencies and scripts
```

## Content Management

### Adding Blog Posts

Create new articles in `src/content/articles/` with proper frontmatter:

```yaml
---
title: "Your Article Title"
path: "/articles/your-article-slug/"
date: 2024-12-19
excerpt: "Brief description"
image: "/images/articles/your-image.jpg"
categories: ["AI", "Machine Learning"]
tags: ["Python", "TensorFlow"]
featured: true
draft: false
---
```

### Adding Projects

Create new projects in `src/content/works/` with similar frontmatter structure.

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

**Live Site**: https://kishore2494.github.io

## Technologies Used

- **Astro**: Static site generator
- **TypeScript**: Type safety
- **MDX**: Enhanced markdown
- **GitHub Pages**: Hosting
- **GitHub Actions**: CI/CD

## Contact

- **Email**: akishorekumar2494@gmail.com
- **LinkedIn**: [kishore-kumar-11184a196](https://www.linkedin.com/in/kishore-kumar-11184a196/)
- **GitHub**: [kishore2494](https://github.com/kishore2494)
- **Twitter**: [@kishore2494](https://twitter.com/kishore2494)

## License

This project is open source and available under the [MIT License](LICENSE).
