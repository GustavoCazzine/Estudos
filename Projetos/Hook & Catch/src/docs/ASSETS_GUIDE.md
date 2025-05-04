
# Assets Organization Guide

This document explains how to organize and add images and other assets to the website.

## Directory Structure

```
/public/            # Static assets served at the root path
  /images/          # Static images that don't need processing
    /logo/          # Logo variations
    /icons/         # Custom icons
    /banners/       # Banner images
    /products/      # Product images
    /backgrounds/   # Background images
    /events/        # Event photos
    /spots/         # Fishing locations photos
  /fonts/           # Custom fonts
  /documents/       # PDFs, docs, etc.
  /videos/          # Video assets
  
/src/assets/        # Assets that may be processed by the build system
  /images/          # Images imported in components
  /icons/           # SVG icons for import
  /styles/          # Global styles
```

## Adding New Images

### Option 1: Public Directory (Recommended for static assets)

Place images in the appropriate folder under `/public/images/`. Then reference them in your code using absolute paths:

```jsx
<img src="/images/products/fishing-rod.jpg" alt="Fishing Rod" />
```

OR use our OptimizedImage component:

```jsx
<OptimizedImage 
  src="/images/products/fishing-rod.jpg" 
  alt="Fishing Rod" 
  width={300} 
  height={200} 
/>
```

### Option 2: Importing (For assets processed by the build system)

```jsx
import fishingRodImage from '@/assets/images/fishing-rod.jpg';

// Then use it
<img src={fishingRodImage} alt="Fishing Rod" />
```

## Image Optimization Best Practices

1. **Use the right format**:
   - JPG: Photos and images with many colors
   - PNG: Images requiring transparency
   - WebP: Modern format with better compression (preferred)
   - SVG: Logos, icons, and simple illustrations

2. **Proper dimensions**:
   - Don't scale down large images with CSS - resize them before adding
   - Use appropriate dimensions based on where they'll appear
   - Consider providing multiple sizes for responsive designs

3. **Compression**:
   - Compress all images before uploading
   - Use tools like TinyPNG, ImageOptim, or Squoosh

4. **Use the OptimizedImage component**:
   - This component adds lazy loading, quality settings, and error handling
   - Perfect for product images, banners, and photos

## External Image CDNs

The site currently uses Unsplash for many images. When using external CDNs:

1. Add the domain to `preconnect` in index.html
2. Use quality and size parameters when available
3. Consider caching important images locally

## Adding Custom Icons

1. SVG icons should be placed in `/src/assets/icons/`
2. We use Lucide React for most icons - install additional ones as needed

## Video Guidelines

1. Use compressed MP4 files for the best balance of quality and file size
2. Consider using YouTube/Vimeo embeds for longer videos
3. Add proper poster images for videos

## Responsive Images

Use the `srcset` attribute for responsive images or the built-in features of OptimizedImage:

```jsx
<OptimizedImage 
  src="/images/banner.jpg"
  alt="Banner" 
  width="100%" 
  height="auto"
  className="w-full h-auto"
/>
```
