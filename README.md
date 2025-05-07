# Event Explorer - A Local Event Discovery Platform

Event Explorer is a comprehensive web application that allows users to discover, explore, and get details about upcoming local events such as conferences, workshops, sports events, art exhibitions, and more. Users can register, log in, browse events, view detailed event information, and leave feedback or ratings for events they attend.

## Live Demo

[Event Explorer Live Demo](#) <!-- Add your deployment URL here -->

## Features

- **User Authentication**: Email/password and Google login options
- **Event Discovery**: Browse and filter events by category
- **Event Details**: View comprehensive information about each event
- **Seat Reservation**: Reserve seats for events with a simple form
- **User Profiles**: View and update profile information
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **My Bookings**: Track all your event reservations in one place
- **Password Reset**: Forgot password functionality

## Technology Stack

- React with TypeScript
- Tailwind CSS for styling
- Firebase Authentication
- React Router for navigation
- AOS (Animate On Scroll) for animations
- Swiper for sliders
- Lucide React for icons
- React Helmet for dynamic titles
- React Hot Toast for notifications

## Installation and Setup

1. Clone the repository
   ```
   git clone https://github.com/yourusername/event-explorer.git
   cd event-explorer
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory based on the `.env.example` file and add your Firebase credentials

4. Start the development server
   ```
   npm run dev
   ```

5. Build for production
   ```
   npm run build
   ```

## Project Structure

```
event-explorer/
├── public/
├── src/
│   ├── components/
│   │   ├── common/      # Common UI components (Navbar, Footer, etc.)
│   │   ├── home/        # Home page components
│   │   └── layouts/     # Layout components
│   ├── contexts/        # React contexts (Auth context)
│   ├── data/            # Mock data
│   ├── firebase/        # Firebase configuration
│   ├── pages/           # Page components
│   └── routes/          # Route configurations
├── .env.example         # Example environment variables
├── package.json
├── tailwind.config.js
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.