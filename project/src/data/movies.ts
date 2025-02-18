import { Movie } from '../types';

export const movies: Movie[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Telugu Movie ${index + 1}`,
  language: 'Telugu',
  genre: ['Action', 'Drama', 'Romance', 'Comedy'][Math.floor(Math.random() * 4)],
  duration: '2h 30min',
  rating: (Math.random() * 2 + 3).toFixed(1),
  imageUrl: `https://source.unsplash.com/random/800x600?movie,cinema&sig=${index}`,
  description: 'An exciting Telugu movie with drama, action, and entertainment.',
  price: Math.floor(Math.random() * 100) + 150,
}));