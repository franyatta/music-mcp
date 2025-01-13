import React, { useState } from 'react';
import { Search } from 'lucide-react';

const LyricsLookup = () => {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [loading, setLoading] = useState(false);
  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setLyrics('');

    try {
      // This is where you would integrate with your chosen lyrics API
      // For now, we'll just show a placeholder message
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setLyrics('API integration required. Please configure your preferred lyrics provider.');
    } catch (err) {
      setError('Failed to fetch lyrics. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Lyrics Lookup</h1>
        <p className="text-gray-600">Search for song lyrics by artist and title</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="artist" className="block text-sm font-medium">
            Artist Name
          </label>
          <input
            id="artist"
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter artist name"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="song" className="block text-sm font-medium">
            Song Title
          </label>
          <input
            id="song"
            type="text"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter song title"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400"
        >
          {loading ? (
            'Searching...'
          ) : (
            <>
              <Search size={20} />
              Search Lyrics
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {lyrics && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">
            {artist} - {song}
          </h2>
          <div className="whitespace-pre-wrap bg-gray-50 p-4 rounded-md">
            {lyrics}
          </div>
        </div>
      )}
    </div>
  );
};

export default LyricsLookup;