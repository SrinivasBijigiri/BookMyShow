import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Movie, ShowTime } from '../types';

interface BookingModalProps {
  movie: Movie;
  onClose: () => void;
}

const showTimes: ShowTime[] = [
  { id: 1, time: '10:00 AM', seats: 100 },
  { id: 2, time: '2:00 PM', seats: 100 },
  { id: 3, time: '6:00 PM', seats: 100 },
  { id: 4, time: '9:00 PM', seats: 100 },
];

export function BookingModal({ movie, onClose }: BookingModalProps) {
  const [selectedTime, setSelectedTime] = useState<ShowTime | null>(null);
  const [seats, setSeats] = useState(1);

  const handleBook = () => {
    if (selectedTime) {
      alert(`Booked ${seats} seats for ${movie.title} at ${selectedTime.time}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Select Show Time</h3>
          <div className="grid grid-cols-2 gap-2">
            {showTimes.map((time) => (
              <button
                key={time.id}
                onClick={() => setSelectedTime(time)}
                className={`p-2 rounded ${
                  selectedTime?.id === time.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {time.time}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Number of Seats</h3>
          <select
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full p-2 border rounded"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'seat' : 'seats'}
              </option>
            ))}
          </select>
        </div>

        <div className="text-lg font-semibold mb-4">
          Total: ₹{movie.price * seats}
        </div>

        <button
          onClick={handleBook}
          disabled={!selectedTime}
          className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}