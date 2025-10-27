# DuoWeave Website Deployment Guide

## Quick Fix for 404 Error

The 404 error is likely due to Vercel deployment configuration. Here's how to fix it:

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from website directory:**
   ```bash
   cd C:\Users\User\Downloads\DuoWeave\website
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? (select your account)
   - Link to existing project? `N`
   - Project name: `duoweave-website`
   - Directory: `./` (current directory)
   - Override settings? `N`

### Option 2: GitHub Integration

1. **Create GitHub repository:**
   - Go to GitHub.com
   - Create new repository: `duoweave-website`
   - Upload all files from `C:\Users\User\Downloads\DuoWeave\website`

2. **Connect to Vercel:**
   - Go to vercel.com
   - Import project from GitHub
   - Select `duoweave-website` repository
   - Framework: Other
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Install Command: (leave empty)

### Option 3: Direct Upload

1. **Zip the website folder:**
   - Select all files in `C:\Users\User\Downloads\DuoWeave\website`
   - Create ZIP file: `duoweave-website.zip`

2. **Upload to Vercel:**
   - Go to vercel.com
   - Drag and drop the ZIP file
   - Deploy

## Domain Configuration

After successful deployment:

1. **Add custom domain:**
   - Vercel Dashboard → Project → Settings → Domains
   - Add `duoweave.com`
   - Add `www.duoweave.com`

2. **Update Cloudflare DNS:**
   ```
   Type: CNAME
   Name: www
   Content: cname.vercel-dns.com
   
   Type: A
   Name: @
   Content: 76.76.19.61
   ```

## Troubleshooting

### If you still get 404:
1. Check that `index.html` exists in root directory
2. Verify `vercel.json` is properly configured
3. Try redeploying with `vercel --prod`

### If domain doesn't work:
1. Wait 5-10 minutes for DNS propagation
2. Check Cloudflare DNS records
3. Verify domain is pointing to Vercel

## Success Indicators

✅ Website loads at `https://duoweave-xxx.vercel.app`
✅ Custom domain works at `https://duoweave.com`
✅ All pages load correctly (about, contact, etc.)
✅ Images and videos display properly


