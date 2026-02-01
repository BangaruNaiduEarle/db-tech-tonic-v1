# DB TECH TONIC — Mobile Repair, Spare Parts & Unlocking Software

A professional, mobile-first React website showcasing DB TECH TONIC's mobile repair services, spare parts catalog, and unlocking software solutions.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Component-Based Architecture**: Clean, modular React components (JSX only, no TypeScript)
- **Smooth Animations**: Powered by Framer Motion for subtle transitions and interactions
- **Interactive Elements**: Modals for product details, accordion FAQ, mobile navigation
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation support
- **SEO Optimized**: Meta tags, semantic structure, fast loading

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Animation library

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky header with navigation and social links
│   ├── Hero.jsx            # Hero section with CTAs
│   ├── Services.jsx        # Service cards with modal details
│   ├── ProductCatalog.jsx  # Spare parts grid with filtering
│   ├── UnlockingSoftware.jsx # Unlocking products and compliance notice
│   ├── Testimonials.jsx    # Customer reviews
│   ├── FAQ.jsx             # Accordion FAQ section
│   ├── Contact.jsx         # Contact form and store info
│   └── Footer.jsx          # Footer with links and info
├── data/
│   └── sampleData.js       # All sample content (products, testimonials, FAQ)
├── App.jsx                 # Main app component
├── App.css                 # Minimal app styles
└── index.css               # Tailwind imports and base styles
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 1. Replace Sample Data

Edit `src/data/sampleData.js` to customize:

- **Products**: Update `sampleProducts` array with your actual spare parts
- **Unlocking Software**: Modify `unlockingProducts` array
- **Testimonials**: Change customer reviews in `testimonials` array
- **FAQ**: Update questions and answers in `faqData`
- **Service Details**: Customize service offerings in `serviceDetails`

### 2. Update Contact Information

In `src/components/Contact.jsx` and `src/components/Footer.jsx`:

- Store address
- Phone numbers (update `tel:` links)
- Email addresses
- Business hours
- Google Maps embed URL

### 3. Update Social Links

In `src/components/Header.jsx` and `src/components/Footer.jsx`:

- Update social media URLs to your actual profiles

### 4. Replace Images

All images currently use Pexels placeholder URLs. Replace with your own:

- Product images in `sampleData.js`
- Hero background in `Hero.jsx`
- Store photos or logo

### 5. Wire Up Contact Form

The contact form in `src/components/Contact.jsx` currently logs to console. To connect to a backend:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();

  // Replace with your API endpoint
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  // Handle response
};
```

### 6. Customize Colors

The primary color is electric blue (`#0EA5E9`). To change it, update in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#YOUR_COLOR',
    dark: '#DARKER_SHADE',
    light: '#LIGHTER_SHADE',
  },
}
```

### 7. Update Meta Tags

Edit `index.html` to customize:

- Page title
- Meta description
- Keywords
- Favicon

## Component Overview

### Header
- Sticky navigation with smooth scroll
- Mobile hamburger menu
- Social media icons
- Logo and branding

### Hero
- Eye-catching headline and subheadline
- Primary and secondary CTAs
- Key value propositions
- Animated entry

### Services
- 4 service categories with icons
- Click to open detailed modal
- Responsive grid layout

### ProductCatalog
- Filterable product grid by brand
- Product details in modal
- Stock indicators
- Price ranges

### UnlockingSoftware
- License-based product listings
- Legal compliance notice
- Product detail modals

### Testimonials
- Customer reviews with ratings
- Avatar placeholders

### FAQ
- Accordion-style questions
- Smooth expand/collapse animations

### Contact
- Contact form with validation
- Store location and hours
- Embedded Google Maps
- Social media links
- Click-to-call phone links

### Footer
- Company information
- Quick links
- Contact details
- Social media icons
- Terms and Privacy placeholders

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels for icons and buttons
- Keyboard-navigable modals
- Focus management
- Alt text for images
- Sufficient color contrast

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive down to 320px width

## License

This project is for DB TECH TONIC business use.

## Support

For questions or customization help, contact your developer or refer to the component documentation in the code.
