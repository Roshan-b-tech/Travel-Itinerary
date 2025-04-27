# Travel Planning Application

A modern travel planning application built with React, TypeScript, and Tailwind CSS. This application helps users plan their trips with a beautiful and intuitive interface.

## Features

- 🌓 Light/Dark mode support
- 🗺️ Destination search
- ⏱️ Trip duration selection
- 👥 Travel group selection (Solo, Couple, Family, Friends)
- 📱 Responsive design
- 🎨 Modern UI with smooth transitions
- 🧭 Interactive dashboard
- ✈️ Flight details
- 🏨 Accommodation options
- 🎯 Activity planning

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Lucide Icons
- Shadcn UI Components

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/travel-planning-app.git
cd travel-planning-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/
│   └── ui/          # Reusable UI components
├── screens/
│   ├── Onboarding/  # Landing page
│   └── MainDashboard/ # Main dashboard
├── lib/             # Utility functions
└── App.tsx          # Main application component
```

## Features in Detail

### Onboarding
- Destination input with location icon
- Duration selection with dropdown
- Travel group selection with icons
- Continue button to proceed to dashboard

### Dashboard
- Theme toggle
- User profile modal (click the avatar at the top right to view and close user profile info)
- Trip overview
- Flight details (with modal: click 'See all' to view flight name, date/time, route, and seat details)
- Accommodation options
- Activity planning
- Interactive calendar

## Project Structure & Component Hierarchy

### Folder Structure
- `src/components/ui/` – Reusable UI components (Avatar, Badge, Card, etc.)
- `src/screens/Onboarding/` – Onboarding and landing page components
- `src/screens/MainDashboard/` – Main dashboard and all its sections
- `src/screens/MainDashboard/sections/` – Feature-specific sections (TokyoByAnima, FlightDetailsByAnima, etc.)
- `src/lib/` – Utility functions

### Component Hierarchy
- `App.tsx` (entry point)
  - `MainDashboard`
    - `ThemeToggle` (theme switcher)
    - `Avatar` (user profile, opens modal)
    - `DivByAnima` (user profile section)
    - `TokyoByAnima` (trip overview, opens modal)
    - `FlightDetailsByAnima` (flight info, opens modal)
    - `FrameByAnima`, `DivWrapperByAnima`, `FrameWrapperByAnima` (accommodation, activities, etc.)
    - `ActivitiesDetailsByAnima`, `ActsByAnima` (activity planning)
    - `DetailPane` (activity details side pane)
    - `BottomNavBar` (navigation)

### Challenges Faced
- **Modal scrolling on mobile:** Ensuring modals are fully scrollable and borders visible on all devices required careful use of flex alignment, max-height, and iOS-specific scrolling styles.
- **Responsive design:** Making all modals, cards, and sections look good and function well on both desktop and mobile required many adjustments to max-width, padding, and margins.
- **Theme handling:** Supporting both light and dark themes throughout the app, including modals and overlays, required conditional classes and testing.
- **Component reusability:** Structuring UI components for reuse while keeping them flexible for different sections.

For further details, see comments in the codebase or reach out to the maintainer.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful components
- [Lucide Icons](https://lucide.dev/) for the icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling
