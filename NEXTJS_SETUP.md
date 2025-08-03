# Next.js Consultation Form Setup

This project has been converted from React to Next.js with a working consultation form that matches your previous project specifications.

## ✅ Features Implemented

### Form Fields (All Required)
- ✅ **Full Name** - Client's full name
- ✅ **Email Address** - Contact email
- ✅ **Phone Number** - Contact phone
- ✅ **Preferred Date** - Date picker for consultation
- ✅ **Preferred Time** - Time picker for consultation
- ✅ **Case Type** - Dropdown with options:
  - Immigration
  - Family Law
  - Criminal
  - Other
- ✅ **Case Description** - Brief description of the case

### Security & Anti-Spam Features
- ✅ **Rate Limiting**: Maximum 5 submissions per minute per IP address
- ✅ **Input Validation**: All fields are required and validated
- ✅ **Error Handling**: Graceful error messages for failed submissions

### Email Notification System
- ✅ **Sends to**: glennquezada14@gmail.com (your law office email)
- ✅ **Subject**: "Consultation Request"
- ✅ **Content includes**:
  - Full Name
  - Email Address
  - Phone Number
  - Preferred Date & Time
  - Case Type
  - Case Description
  - Submission timestamp

### Database Integration
- ✅ **MongoDB Storage**: All submissions are stored in MongoDB
- ✅ **Status Tracking**: pending, confirmed, cancelled
- ✅ **Timestamps**: All submissions include creation and update times

### User Experience
- ✅ **Real-time feedback**: Shows "Submitting..." while processing
- ✅ **Success message**: "Thank you for your consultation request. We will contact you shortly to confirm your appointment."
- ✅ **Error message**: "There was an error submitting your request. Please try again later."
- ✅ **Form reset**: Clears all fields after successful submission

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Environment File
Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_gmail_app_password
SMTP_FROM=your_email@gmail.com
```

### 3. Gmail Setup
To use Gmail for sending emails:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `SMTP_PASSWORD` (not your regular Gmail password)

### 4. MongoDB Setup
1. **Create a MongoDB Atlas account** (free tier available)
2. **Create a new cluster**
3. **Get your connection string** and add it to `MONGODB_URI`

### 5. Run the Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your website.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── consultation/
│   │       └── route.ts          # API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── components/
│   └── ConsultationForm.tsx      # Form component
├── lib/
│   ├── mongodb.ts                # Database connection
│   └── rateLimit.ts              # Rate limiting
└── models/
    └── Consultation.ts           # MongoDB schema
```

## 🔧 API Endpoints

- `POST /api/consultation` - Submit consultation form (rate limited to 5/min)
- Form validation and MongoDB storage
- Email notifications sent to your law office

## 🛡️ Security Features

1. **Rate Limiting**: Prevents spam with 5 requests per minute per IP
2. **Input Validation**: All fields are required and validated
3. **Error Handling**: Graceful error messages
4. **Database Storage**: All submissions stored securely

## 📱 Form Features

- **Responsive Design**: Works on all devices
- **Real-time Validation**: Shows required field indicators
- **Professional UI**: Matches your law firm branding
- **Accessibility**: Proper labels and ARIA attributes

## 🎯 Testing

1. **Fill out the form** with all required fields
2. **Submit** and check for success message
3. **Verify email** was sent to glennquezada14@gmail.com
4. **Check MongoDB** for stored submission
5. **Test rate limiting** by submitting multiple times quickly

## 🚨 Troubleshooting

- **Email not sending**: Check Gmail app password setup
- **Rate limiting errors**: Wait 1 minute between submissions
- **MongoDB connection**: Verify connection string in .env.local
- **Build errors**: Run `npm install` to ensure all dependencies are installed

## 🎉 Success!

Your Next.js consultation form is now fully functional with:
✅ All required fields  
✅ Email notifications  
✅ Rate limiting  
✅ MongoDB storage  
✅ Professional UI  
✅ Responsive design  

The form provides a professional, secure way for potential clients to request legal consultations while protecting your office from spam and ensuring you receive all necessary information to follow up with clients. 