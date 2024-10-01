# Contributing to BookFinder

Thank you for considering contributing to BookFinder! We welcome all contributions, big or small.

## How to Contribute

1. Fork the repository.
2. Clone your fork:

   ```sh
   git clone https://github.com/yourusername/bookfinder.git
   cd bookfinder
   ```

3. Create a new branch for your feature or bugfix:

   ```sh
   git checkout -b my-feature-branch
   ```

4. Make your changes and commit them:

   ```sh
   git commit -m "Add my new feature"
   ```

5. Push your changes to your fork:

   ```sh
   git push origin my-feature-branch
   ```

6. Open a pull request on the main repository.

## Code of Conduct

Be kind, be considerate, be constructive - nothing else will be tolerated.

## Getting an API Key

To contribute to this project, you will need your own Google Books API key. Follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Navigate to the "APIs & Services" section.
4. Enable the "Google Books API".
5. Create credentials for an API key.
6. Copy the API key and add it to a `.env` file in the root of the project:
   ```env
   VITE_GOOGLE_BOOKS_API_KEY=your_api_key_here
   ```
