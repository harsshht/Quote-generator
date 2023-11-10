
# Quote Generator App

## Overview

The Quote Generator App is a web application that displays random quotes fetched from a third-party API service. Users can explore a variety of quotes or filter them by selecting specific tags.

## Features

- Load a random quote on the homepage using the `/random` endpoint.
- Generate a new quote by clicking the "Generate New Quote" button.
- Display a list of tags in a dropdown on the homepage, fetched from the `/tags` endpoint.
- Filter quotes by selecting a tag from the dropdown.
- Mobile-responsive design for a seamless experience across devices.

## API

The app utilizes the [Quotable API](https://github.com/lukePeavey/quotable#readme), and the base API URL is `api.quotable.io`.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/quote-generator-app.git
cd quote-generator-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the app:

```bash
npm start
```

The app will be accessible at `http://localhost:3000`.

## Usage

1. Upon entering the homepage, a random quote will be loaded.
2. Click the "Generate New Quote" button to fetch and display another random quote.
3. The dropdown menu allows you to select a specific tag, filtering quotes based on your selection.

## Design

The app reflects a clean and user-friendly design. It has been optimized for both desktop and mobile devices, ensuring a consistent and enjoyable experience.

## Technologies Used

- React
- Redux for state management
- Tailwind CSS for styling
- Fetch API for making HTTP requests

## Contributors

- [Your Name](https://github.com/your-username)

## License

This project is licensed under the [MIT License](LICENSE).

