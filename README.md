# Lakshay Saini - Portfolio

A modern, high-performance portfolio website showcasing my journey as a Full Stack Developer. Features include interactive project showcases, comprehensive skills section, professional experience timeline, achievements, testimonials, and a working contact form.

![Portfolio Preview](./public/images/1.jpg)

## 🚀 Features

- ⚡ **Next.js 16** - Latest features with App Router
- 🎨 **Tailwind CSS 4** - Modern utility-first styling
- 🎭 **Framer Motion** - Smooth animations and transitions
- ✨ **Advanced Animations** - Floating particles, starfield, gradient mesh, cursor trail
- 📱 **Fully Responsive** - Mobile-first design
- 🎯 **SEO Optimized** - Meta tags, sitemap, robots.txt
- ♿ **Accessible** - WCAG compliant
- 🌐 **PWA Ready** - Progressive Web App support
- 📊 **Performance Optimized** - Lighthouse score 95+
- 📧 **Working Contact Form** - Email integration with Nodemailer/Resend

## 📋 Sections

- **Hero** - Eye-catching introduction with typing animation
- **About** - Detailed background, education, experience, and certifications with stats
- **Services** - Comprehensive list of offered services
- **Projects** - Featured projects with live demos and GitHub links
- **Skills** - Technology stack with visual progress indicators
- **Achievements** - Milestones and accomplishments
- **Testimonials** - Client and colleague feedback
- **Contact** - Working contact form with social links

## 🎨 Advanced Animations

### Background Effects:
- 🌟 **50 Floating Particles** - Smooth up/down motion with glow
- ⭐ **100 Twinkling Stars** - Starfield effect
- 🌈 **Animated Gradient Mesh** - Color-shifting background
- 📐 **Pulsing Grid Lines** - Breathing effect
- 📏 **Moving Diagonal Lines** - Continuous scroll pattern
- 🎨 **4 Animated Color Glows** - Purple, Pink, Cyan, Orange
- 🖱️ **Cursor Trail** - Interactive glow following mouse (desktop only)

### Performance:
- GPU accelerated animations
- Smooth 60fps
- Optimized for all devices
- Minimal performance impact

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16.2.6
- **UI Library:** React 19.2.4
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12.38.0
- **Icons:** Lucide React 1.14.0

### Backend
- **Email Service:** Nodemailer 8.0.7 / Resend 4.5.1

### Development
- **Linting:** ESLint 9
- **Package Manager:** npm

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/lakshay7093/lakshay-portfolio.git
cd lakshay-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
# Email Configuration (choose one)
# Option 1: Nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Option 2: Resend
RESEND_API_KEY=your-resend-api-key

# Contact Email
CONTACT_EMAIL=lakshaysaini181@gmail.com
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
lakshay-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API
│   ├── about/
│   ├── contact/
│   ├── projects/
│   ├── skills/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx                # Root layout with metadata
│   ├── loading.tsx               # Loading component
│   ├── manifest.ts               # PWA manifest
│   ├── page.tsx                  # Home page
│   ├── robots.ts                 # Robots.txt
│   └── sitemap.ts                # Sitemap
├── components/
│   ├── CursorTrail.tsx           # Interactive cursor effect
│   ├── ScrollProgress.tsx        # Scroll progress bar
│   ├── ScrollToTop.tsx           # Back to top button
│   └── StructuredData.tsx        # SEO structured data
├── sections/
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── BackgroundEffects.tsx     # Advanced animations
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   ├── Skills.tsx
│   └── Testimonials.tsx
├── lib/
│   └── github.ts                 # GitHub API utilities
├── public/
│   ├── images/
│   ├── profile.jpg
│   └── resume.pdf
├── .env.local                    # Environment variables
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`sections/Hero.tsx`)
   - Update name, titles, and description
   - Modify typing animation sequences

2. **About Section** (`sections/About.tsx`)
   - Update education, experience, and certifications
   - Modify stats and technologies

3. **Projects** (`sections/Projects.tsx`)
   - Add/remove projects
   - Update project details, links, and tech stack

4. **Contact** (`sections/Contact.tsx`)
   - Update email, phone, and social links

### Styling

All colors and styles can be customized in:
- `app/globals.css` - Global styles
- `tailwind.config.ts` - Tailwind configuration
- Individual component files - Component-specific styles

### Animations

Adjust animation settings in:
- `sections/BackgroundEffects.tsx` - Background animations
- `components/CursorTrail.tsx` - Cursor trail effect

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lakshay7093/lakshay-portfolio)

### Other Platforms

- **Netlify:** Connect GitHub repo and deploy
- **Railway:** Deploy with one click
- **AWS Amplify:** Connect and deploy

## 📊 Performance

- **Lighthouse Score:** 95+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Cumulative Layout Shift:** < 0.1

## 🔒 Security

- Environment variables for sensitive data
- Input sanitization on contact form
- Rate limiting on API routes (recommended)
- HTTPS only in production

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Lakshay Saini**

- GitHub: [@lakshay7093](https://github.com/lakshay7093)
- LinkedIn: [Lakshay Saini](https://www.linkedin.com/in/lakshay-saini-6905b728a/)
- Email: lakshaysaini181@gmail.com
- WhatsApp: +91 88375 78244

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/)

## 📈 Future Enhancements

- [ ] Blog section with MDX
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Admin dashboard for content management
- [ ] Analytics dashboard
- [ ] Newsletter integration
- [ ] Case studies for projects
- [ ] Video project demos

---

⭐ If you like this portfolio, please give it a star on GitHub!

Made with ❤️ by Lakshay Saini
