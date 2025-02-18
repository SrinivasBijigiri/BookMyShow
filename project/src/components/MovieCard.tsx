import React from 'react';
import { Star } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onBookNow: (movie: Movie) => void;
}

export function MovieCard({ movie, onBookNow }: MovieCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
        <div className="flex items-center mb-2">
          <Star className="w-5 h-5 text-yellow-400 mr-1" />
          <span>{movie.rating}/5</span>
        </div>
        <div className="text-sm text-gray-600 mb-2">
          <p>{movie.genre} • {movie.duration}</p>
          <p>₹{movie.price}</p>
        </div>
        <button
          onClick={() => onBookNow(movie)}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}