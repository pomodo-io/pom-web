![POM-Banner](https://github.com/user-attachments/assets/99e8b28c-2837-4031-aba1-cd9da7244985)
**pomodo.io - pom-web repository**

This project contains the web repository of pomodo.io. A website, allowing students accross the world to study together and hold each other accountable.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Main Contributers](#group-members)
3. [License](#license)

## Getting Started
### Setup

To run this application locally and use Discord authentication, you'll need to create a Discord application and configure its OAuth2 settings.

#### 1. Create a Discord Application

1.  Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2.  Log in to your Discord account if prompted.
3.  Click on the "New Application" button.
4.  Give your application a name and click "Create".

#### 2. Configure OAuth2

1.  In your application's dashboard, navigate to the "OAuth2" section in the left-hand sidebar.
2.  Under the "General" tab, you will see your "Client ID" and "Client Secret". You will need these later.
3.  **If the "Client Secret" is hidden**, you will need to reset it. Click the "Reset Secret" button and confirm the action. **Copy the new secret immediately** as you won't be able to view it again after leaving the page.
4.  Go to the "Redirects" tab and add the redirect URIs your application will use. This is crucial for the OAuth2 flow. Typically, this would be a URL like `http://localhost:3000/auth/discord/callback` during local development (replace `3000` with your application's port if different).

#### 3. Configure Environment Variables

You will need to provide your application with your Discord application's Client ID and Client Secret. This is typically done using environment variables.

1.  Rename `.env.example` to `.env` or create a new `.env` file in the root directory of this project.
2.  Add the following lines to the `.env` file, replacing the placeholder values with your actual Client ID and Client Secret from the Discord Developer Portal:

    ```env
    AUTH_SECRET=""
    AUTH_DISCORD_ID=""
    AUTH_DISCORD_SECRET=""
    ```
    ```bash
    # You can generate a new secret on the command line with:
    # https://next-auth.js.org/configuration/options#secret
    npx auth secret
    ```
    
#### 3. Run the Application

```bash
# Example using npm
npm install
npm run dev
```
---

## Group Members

*   Svastik Sharma @svastiks
*   Sathira Williams @pwSathira

## License
This project is licensed under the [GPL-3.0 license](LICENSE).

