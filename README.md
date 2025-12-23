# DevGroup Portfolio

A high-performance, dark-themed portfolio for a fullstack development group. Built with Next.js 15, TypeScript, and CSS Modules.

## Features

- **Ambient Dark UI:** Custom dark theme with subtle gradients and glassmorphism.
- **Sharp Aesthetics:** No rounded corners, professional and edgy look.
- **Responsive Design:** Fully responsive for web and mobile.
- **Contact Form:** Integrated with Nodemailer for email delivery.
- **Project Showcase:** Grid layout for displaying case studies.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + Global Variables (Vanilla CSS methodology)
- **Email:** Nodemailer

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

3.  **Open [http://localhost:3000](http://localhost:3000)**

## Configuration

To enable the contact form, create a `.env.local` file in the root directory with your SMTP credentials:

```env
EMAIL_HOST=smtp.your-provider.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-password
EMAIL_FROM="DevGroup" <no-reply@devgroup.com>
EMAIL_TO=leads@devgroup.com
```

If variables are missing, the contact form will log data to the server console (Mock Mode).
