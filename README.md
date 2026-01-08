# Star Rating Component

A React application featuring a customizable star rating component built with TypeScript and Vite.

## Features

- **Interactive Star Rating**: Click to set ratings, hover for preview
- **Customizable**: Configurable maximum rating (default: 5 stars)
- **Toggle Rating**: Click the same star to reset rating to 0
- **Real-time Updates**: Parent component receives rating changes via callback
- **Visual Feedback**: Hover effects and active state styling

## Component Usage

```tsx
import StarRating from "./star-rating.component";

function App() {
  const [rating, setRating] = useState<number>(0);
  
  return (
    <div>
      {/* Default 5-star rating */}
      <StarRating onChange={setRating} />
      
      {/* Custom 10-star rating */}
      <StarRating onChange={setRating} maxRating={10} />
    </div>
  );
}
```

## Props

- `maxRating?: number` - Maximum number of stars (default: 5)
- `onChange: (rating: number) => void` - Callback function called when rating changes

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling and development
- CSS for styling

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.tsx                      # Main application component
├── star-rating.component.tsx    # Star rating component
├── star-rating.styles.css       # Component-specific styles
└── main.tsx                     # Application entry point
```
