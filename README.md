# Bike Search App

Angular application for searching and viewing bike information using the Bikeindex.org API.

## Features

- 🔍 Search bikes by location
- 📱 Responsive design for all devices
- 🚲 View detailed bike information
- ⚡ Fast and efficient search
- ♿ Accessibility-friendly interface

## Tech Stack

- Angular 17.2.0
- TypeScript
- SCSS
- RxJS

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bike-search-app.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`

### Running Tests

```bash
npm test
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── bike-card/
│   │   ├── bike-detail/
│   │   ├── bike-list/
│   │   └── search-input/
│   ├── models/
│   ├── services/
│   └── app.routes.ts
├── assets/
└── styles/
```

## Features in Detail

### Search Functionality
- Real-time search as you type
- Search by location
- Results update automatically

### Bike Details
- Comprehensive bike information
- Manufacturer details
- Stolen status and location
- images

### User Experience
- Clean and intuitive interface
- Responsive design
- Keyboard navigation support
- Screen reader compatibility


## Acknowledgments
- [Bikeindex.org](https://bikeindex.org) for providing the API
