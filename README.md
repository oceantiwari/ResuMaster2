# ResuMaster AI

This is a Next.js application built with Firebase Studio that helps you create and optimize your resume using AI.

## Getting Started

To get started, take a look at `src/app/page.tsx`. This is the main landing page for the application. The core AI features are located in the `src/app/dashboard` directory and its sub-pages.

## Running Locally: A Detailed Guide

Follow these steps carefully to get a local copy of the project up and running on your machine.

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- [npm](https://www.npmjs.com/) (which comes with Node.js) or another package manager like [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/).

### Step 1: Clone and Install Dependencies

First, get the project code onto your machine and install all the required packages.

1.  **Clone the repository** (or download the source code).
2.  **Navigate into the project directory** in your terminal:
    ```bash
    cd path/to/resumaster-ai
    ```
3.  **Install the project dependencies**. This command reads the `package.json` file and downloads all the necessary libraries.
    ```bash
    npm install
    ```

### Step 2: Set Up Environment Variables

The AI features in this application are powered by Google's Gemini models through Genkit. To use them, you need a Gemini API key. This key should be kept private and not be committed to version control.

1.  **Create a local environment file**. In the root of your project, create a new file named `.env.local`. This file is ignored by Git, so it's a safe place for your API key.
    ```bash
    touch .env.local
    ```
2.  **Get your Gemini API Key**. You can obtain a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
3.  **Add the key to your `.env.local` file**. Open the file and add the following line, replacing `"YOUR_API_KEY_HERE"` with the key you just obtained:
    ```
    GEMINI_API_KEY="YOUR_API_KEY_HERE"
    ```
    Save the file. The Next.js and Genkit servers will automatically load this variable when they start.

### Step 3: Run the Development Servers

This project requires two separate servers to be running at the same time:
- The **Genkit server** handles the AI logic (the "flows").
- The **Next.js server** handles the user interface and serves the web pages.

You will need to open **two separate terminal windows or tabs** for this.

**Terminal 1: Start the Genkit AI Server**

In your first terminal, run the following command to start the Genkit server:

```bash
npm run genkit:watch
```

- This command starts the Genkit development server, which makes your AI flows available as API endpoints.
- The `--watch` flag means the server will automatically restart whenever you make a change to a file in the `src/ai/` directory.
- You should see output indicating that the server is running and your flows (like `suggestSkills`, `rewriteResumeContent`, etc.) are available.

**Terminal 2: Start the Next.js Frontend Server**

In your second terminal, run the following command to start the Next.js frontend:

```bash
npm run dev
```

- This command starts the Next.js development server.
- The `--turbopack` flag enables a faster development experience.
- The `-p 9002` flag specifies that the server should run on port 9002.
- You will see output indicating that the server is ready, usually with a URL.

### Step 4: Access the Application

Once both servers are running without errors, you can open your web browser and navigate to:

[http://localhost:9002](http://localhost:9002)

You should now see the ResuMaster AI home page. You can navigate to the dashboard and use the AI-powered features. Congratulations, you're all set up!
