export interface Movie {
  id: number;
  title: string;
  language: string;
  genre: string;
  duration: string;
  rating: number;
  imageUrl: string;
  description: string;
  price: number;
}

export interface ShowTime {
  id: number;
  time: string;
  seats: number;
}