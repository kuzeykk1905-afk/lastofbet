# lastofbet.com - Domain For Sale

Premium domain landing page built for GitHub Pages deployment.

## 📁 Deployment Files

All production-ready files are in the `build` folder:
- `index.html` - Main HTML file
- `static/css/` - Optimized CSS files
- `static/js/` - Optimized JavaScript files

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository
```bash
# Create a new repository on GitHub named "lastofbet.com"
# Then push your build folder contents
cd build
git init
git add .
git commit -m "Initial deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lastofbet.com.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose branch: **main** and folder: **/ (root)**
5. Click **Save**

### Step 3: Configure Custom Domain
1. In the same GitHub Pages settings
2. Under "Custom domain", enter: `www.lastofbet.com`
3. Check **Enforce HTTPS**

### Step 4: DNS Configuration
Go to your domain provider (where you bought lastofbet.com) and add these DNS records:

**CNAME Record:**
- Type: `CNAME`
- Host/Name: `www`
- Value: `YOUR_USERNAME.github.io`
- TTL: `3600` (or default)

**A Records (for apex domain):**
Add 4 A records pointing to GitHub Pages IPs:
- Type: `A`
- Host/Name: `@` (or leave blank for root domain)
- Values (add all 4):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

## ⏱️ DNS Propagation
- DNS changes can take 24-48 hours to propagate
- Your site will be live at `https://www.lastofbet.com` once DNS is configured
- Initially accessible at `https://YOUR_USERNAME.github.io/lastofbet.com/`

## 📝 Form Submissions
Currently, form submissions are saved to browser localStorage (mock data). For production use, consider:
- [Formspree](https://formspree.io/) - Free tier available
- [Web3Forms](https://web3forms.com/) - Free, no signup needed
- [EmailJS](https://www.emailjs.com/) - Send emails directly from JavaScript

## ✅ What's Included
- ✅ Fully responsive design
- ✅ Dark theme with green/gold accents
- ✅ All text in Turkish
- ✅ Contact form with validation
- ✅ Smooth scrolling and animations
- ✅ SEO meta tags
- ✅ Mobile-optimized
- ✅ No backend dependencies

## 📧 Contact Email
All contact links point to: lastofbet@proton.me

## 🛠️ Built With
- React 19
- Tailwind CSS
- Shadcn UI Components
- Lucide React Icons
