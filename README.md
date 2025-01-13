# Music MCP - Lyrics Lookup Component

A React component for looking up song lyrics, designed to be integrated with various lyrics APIs.

## Features

- Clean and responsive UI
- Support for artist and song title search
- Loading states and error handling
- Ready for API integration
- Built with React and Tailwind CSS

## Installation

```bash
npm install @your-scope/music-mcp
```

## Usage

```jsx
import { LyricsLookup } from '@your-scope/music-mcp';

function App() {
  return (
    <div>
      <LyricsLookup />
    </div>
  );
}
```

## API Integration

The component is designed to be integrated with your preferred lyrics API. To integrate with an API:

1. Obtain API credentials from your chosen provider (e.g., Musixmatch, Genius)
2. Modify the `handleSubmit` function in `LyricsLookup.jsx`
3. Implement proper error handling and rate limiting

Example integration with Musixmatch API:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setLyrics('');

  try {
    const response = await fetch(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${song}&q_artist=${artist}&apikey=YOUR_API_KEY`);
    const data = await response.json();
    
    if (data.message.header.status_code === 200) {
      setLyrics(data.message.body.lyrics.lyrics_body);
    } else {
      setError('Lyrics not found');
    }
  } catch (err) {
    setError('Failed to fetch lyrics. Please try again.');
  } finally {
    setLoading(false);
  }
};
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT