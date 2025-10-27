# 🌐 DuoWeave Marketing Website

**Professional, dynamic marketing website for DuoWeave - The dual sex-themed social media platform.**

---

## 📋 Overview

This is a beautiful, modern, and fully responsive marketing website for DuoWeave. It showcases the app's unique features, dual experiences (Male/Female), and provides prominent download buttons for iOS and Android.

### **Features:**
- ✅ **Stunning Hero Section** with animated gradient orbs
- ✅ **Dual Experience Showcase** highlighting Male/Female themes
- ✅ **Features Grid** with icons and descriptions
- ✅ **Screenshot Carousel** with auto-play and swipe support
- ✅ **Download Section** with prominent App Store and Google Play buttons
- ✅ **Fully Responsive** design (mobile, tablet, desktop)
- ✅ **Smooth Animations** and scroll effects
- ✅ **Performance Optimized** with lazy loading and debounced events

---

## 🚀 Quick Start

### **1. Local Development**

Simply open `index.html` in your web browser:

```bash
# Option 1: Double-click index.html

# Option 2: Use a local server (recommended)
# Python 3
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server -p 8000

# Then open: http://localhost:8000
```

### **2. Deploy to Production**

The website is a static site and can be deployed to any hosting platform:

**Recommended Platforms:**
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop the `website` folder
- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **AWS S3**: Upload files to an S3 bucket with static hosting
- **Cloudflare Pages**: Connect GitHub repo

---

## 📂 File Structure

```
website/
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── script.js               # JavaScript interactions
├── app-store-badge.svg     # App Store button
├── google-play-badge.svg   # Google Play button
└── README.md               # This file
```

**Note:** The website uses assets from the parent directory:
- `../assets/Entire Logo.png` - DuoWeave logo
- `../assets/Men.png` - Male experience icon
- `../assets/Women.png` - Female experience icon
- `../presentation/*.png` - App screenshots

---

## 🔧 Configuration

### **Update App Store Links**

Edit `script.js` and replace the placeholder URLs:

```javascript
// Line 144-145
const APP_STORE_URL = 'https://apps.apple.com/app/duoweave/id123456789'; // Your actual App Store URL
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.duoweave'; // Your actual Play Store URL
```

### **Update QR Codes**

Replace the placeholder QR codes in `index.html` (lines 325-346) with actual QR code images or generate them dynamically.

### **Customize Colors**

Edit the CSS variables in `styles.css` (lines 11-23):

```css
:root {
    /* Male Experience Colors */
    --male-primary: #B7CBDF;
    --male-background: #F9FAFB;
    --male-text: #1F2937;
    
    /* Female Experience Colors */
    --female-primary: #EEBECE;
    --female-background: #FCF8F9;
    --female-text: #2D1B69;
    
    /* Customize as needed */
}
```

---

## 🎨 Design Highlights

### **1. Dual Sex-Themed Branding**
- **Male Experience**: Clean blue gradient (#B7CBDF)
- **Female Experience**: Warm pink gradient (#EEBECE)
- **Unified Branding**: Both experiences showcased side-by-side

### **2. Interactive Elements**
- **Parallax Orbs**: Mouse-following gradient orbs in the background
- **Auto-Playing Carousel**: 5-second intervals with manual controls
- **Smooth Scroll**: Animated scrolling to sections
- **Mobile Menu**: Hamburger menu for mobile devices

### **3. Performance Features**
- **Lazy Loading**: Images load as user scrolls
- **Debounced Resize**: Optimized window resize handling
- **Intersection Observer**: Scroll-triggered animations
- **Responsive Images**: Optimized for all screen sizes

---

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

---

## 🔍 SEO & Meta Tags

The website includes:
- ✅ Proper meta description
- ✅ Semantic HTML5 structure
- ✅ Alt text for all images
- ✅ ARIA labels for accessibility
- ✅ Open Graph tags (add for social sharing)

**To Add Open Graph Tags:**

Add these to `<head>` in `index.html`:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://duoweave.com/">
<meta property="og:title" content="DuoWeave - Authentic. Verified. Connected.">
<meta property="og:description" content="Experience social media reimagined. Choose your journey. Male or Female. Verified. Real.">
<meta property="og:image" content="https://duoweave.com/og-image.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://duoweave.com/">
<meta property="twitter:title" content="DuoWeave - Authentic. Verified. Connected.">
<meta property="twitter:description" content="Experience social media reimagined. Choose your journey. Male or Female. Verified. Real.">
<meta property="twitter:image" content="https://duoweave.com/og-image.png">
```

---

## 🎯 Analytics Integration

### **Add Google Analytics**

Add before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **Add Facebook Pixel**

Add before closing `</head>` tag:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## ✨ Key Features to Highlight

1. **Facial Verification** - AI-powered biological verification
2. **Fact-Checking** - Integrated verification from multiple sources
3. **Dual Experiences** - Personalized Male/Female themes
4. **Community Features** - Challenges, Circles, Live Rooms
5. **Event Discovery** - Interactive map-based events
6. **Real-Time Chat** - Direct messaging with live features

---

## 🐛 Troubleshooting

### **Images Not Loading**
- Check that asset paths are correct (relative to `website/` folder)
- Ensure `../assets/` and `../presentation/` folders exist

### **Animations Not Working**
- Check browser compatibility (modern browsers required)
- Ensure JavaScript is enabled

### **Mobile Menu Not Opening**
- Check console for JavaScript errors
- Verify `script.js` is loaded correctly

---

## 🚀 Future Enhancements

- [ ] Add blog section
- [ ] Integrate waitlist/email signup
- [ ] Add testimonials section
- [ ] Create press/media kit page
- [ ] Add careers page
- [ ] Implement multi-language support
- [ ] Add cookie consent banner
- [ ] Create privacy policy and terms pages

---

## 📞 Support

For questions or issues:
- **Email**: support@duoweave.com
- **Twitter**: @DuoWeave
- **Instagram**: @DuoWeave

---

## 📄 License

© 2025 DuoWeave. All rights reserved.

---

**Built with ❤️ by the DuoWeave Team**

*Authentic. Verified. Connected.*




