# Modern Lawyer Website Template

A professional, responsive lawyer website template built with React, Node.js, and Tailwind CSS. Features a clean design, consultation form with email integration, and multiple practice area pages.

## 🚀 Features

### Frontend (React + Tailwind CSS)
- **Modern, responsive design** with mobile-first approach
- **Clean typography** using serif fonts for headings and sans-serif for body text
- **Custom color scheme**: Gold (#d4af37), Navy Blue (#1e2a38), Steel Grey (#7a8a99)
- **React Router DOM** for seamless page navigation
- **Modular components** for easy customization
- **Fixed contact button** on all pages
- **Google Maps integration** on contact page
- **Social media icons** and links

### Backend (Node.js + Express)
- **RESTful API** for form submissions and data
- **Nodemailer integration** for email notifications
- **Security middleware** (Helmet, CORS, Rate limiting)
- **Environment variable configuration**
- **Error handling** and validation

### Core Pages
- **Homepage** with hero section, stats, and practice area preview
- **Practice Areas** with detailed service information
- **Contact page** with Google Maps and consultation form
- **Responsive navigation** with mobile menu

## 📁 Project Structure

```
lawyer-website-template/
├── client/                 # React frontend
│   ├── public/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Node.js backend
│   ├── index.js           # Express server
│   ├── package.json
│   └── env.example        # Environment variables template
├── package.json           # Root package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Gmail account for email notifications

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd lawyer-website-template

# Install all dependencies (root, server, and client)
npm run install-all
```

### 2. Configure Environment Variables

```bash
# Navigate to server directory
cd server

# Copy environment template
cp env.example .env

# Edit .env file with your configuration
```

Update the `.env` file with your settings:

```env
# Server Configuration
PORT=5000
CLIENT_URL=http://localhost:3000

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
LAWYER_EMAIL=lawyer@lawfirm.com
```

**Important**: For Gmail, you need to use an App Password, not your regular password. 
[Generate an App Password here](https://support.google.com/accounts/answer/185833)

### 3. Start Development Servers

```bash
# From the root directory
npm run dev
```

This will start both the backend server (port 5000) and frontend development server (port 3000).

## 🎨 Customization

### Colors
The color scheme is defined in `client/tailwind.config.js`:

```javascript
colors: {
  gold: '#d4af37',
  navy: '#1e2a38',
  steel: '#7a8a99',
  'gold-light': '#e6c866',
  'navy-light': '#2a3a4a',
  'steel-light': '#9ba8b5'
}
```

### Content
- **Law firm name**: Update in `client/src/components/NavBar.js` and `client/src/components/Footer.js`
- **Practice areas**: Modify in `server/index.js` under the `/api/practice-areas` endpoint
- **Contact information**: Update in `client/src/pages/Contact.js` and footer
- **Google Maps**: Replace the iframe src in `client/src/pages/Contact.js`

### Images
- Add your own images to `client/public/images/`
- Update image paths in the practice areas data

## 📧 Email Configuration

The consultation form sends emails using Nodemailer with Gmail. To set up:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password in your `.env` file

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
# Build the React app
cd client
npm run build

# Deploy the build folder to your hosting service
```

### Backend (Render/Railway/Heroku)
```bash
# Deploy the server directory
# Make sure to set environment variables in your hosting platform
```

### Environment Variables for Production
- `PORT`: Your hosting platform will set this
- `CLIENT_URL`: Your frontend URL (e.g., https://yourdomain.com)
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail App Password
- `LAWYER_EMAIL`: Where consultation requests should be sent

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Available Scripts

```bash
# Root directory
npm run dev          # Start both frontend and backend
npm run server       # Start only backend
npm run client       # Start only frontend
npm run build        # Build frontend for production
npm run install-all  # Install all dependencies

# Client directory
npm start           # Start React development server
npm run build       # Build for production
npm test            # Run tests

# Server directory
npm start           # Start production server
npm run dev         # Start development server with nodemon
```

## 🎯 Key Components

- **NavBar**: Responsive navigation with mobile menu
- **ConsultationForm**: Reusable form with validation and email integration
- **PracticeCard**: Display practice areas with hover effects
- **ContactButton**: Fixed floating contact button
- **Footer**: Comprehensive footer with links and contact info

## 📞 Support

For questions or issues:
1. Check the environment configuration
2. Ensure all dependencies are installed
3. Verify email settings for consultation form
4. Check browser console for frontend errors
5. Check server logs for backend errors

## 📄 License

This project is licensed under the MIT License.

---

**Note**: This is a template. Remember to:
- Replace placeholder content with your actual law firm information
- Update contact details and addresses
- Add your own images and branding
- Configure proper email settings
- Test the consultation form thoroughly
- Add any additional legal disclaimers required in your jurisdiction 