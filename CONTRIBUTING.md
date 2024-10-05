# Contributing to Book Finder 2.0

Thank you for considering contributing to BookFinder! We welcome all contributions, big or small. If you have ideas for improvements beyond the issues already listed, feel free to suggest them! If you want to grab any of the existing issues, leave a comment on the issue stating your intent to work on it so others know it's being worked on - you don't need to wait to have it assigned to you. Go nuts!

## How to Contribute

1. Fork the repository.
2. Clone your fork:

   ```sh
   git clone https://github.com/livoszlak/book-finder-api-2.0.git
   cd bookfinder
   ```

3. Create a new branch for your feature or bugfix (preferably named after the issue you're working on, for example **66-add-header**):

   ```sh
   git checkout -b my-feature-branch
   ```

   See README for instructions on setting up dev environment.

4. Make your changes and commit them:

   ```sh
   git commit -m "[Insert your nice descriptive commit message here]"
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

## Development Workflow

Ensure your branch is up to date with the main branch:

```sh
git checkout main
git pull origin main
```

## Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Google Books API Documentation](https://developers.google.com/books/docs/overview)
