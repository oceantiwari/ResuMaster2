# ResuMaster AI

This is a Next.js application built with Firebase Studio that helps you create and optimize your resume using AI.

## Getting Started

To get started, take a look at `src/app/page.tsx`.

## Running Locally

To run this project on your local machine, follow these steps:

### 1. Install Dependencies

First, install the necessary npm packages:

```bash
npm install
```

### 2. Set Up Environment Variables

The AI features in this application are powered by Google's Gemini models through Genkit. To use them, you need a Gemini API key.

1.  Create a new file named `.env.local` in the root of your project.
2.  Add your Gemini API key to this file:

```
GEMINI_API_KEY="YOUR_API_KEY_HERE"
```

You can obtain a Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### 3. Run the Development Servers

You need to run two separate processes in two different terminal windows: one for the Genkit AI services and one for the Next.js frontend.

**In your first terminal, start the Genkit server:**

```bash
npm run genkit:watch
```

This command starts the Genkit flows and will automatically restart when you make changes to the AI-related files in `src/ai/flows/`.

**In your second terminal, start the Next.js development server:**

```bash
npm run dev
```

### 4. Open Your Browser

Once both servers are running, you can access the application at [http://localhost:9002](http://localhost:9002).
