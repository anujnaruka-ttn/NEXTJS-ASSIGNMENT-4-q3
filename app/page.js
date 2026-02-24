'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from './store/slices/quotesSlice';

export default function Home() {
  const dispatch = useDispatch();
  const { quotes, loading, error } = useSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-white mb-10 tracking-wide">
        Quotes
      </h1>

      {loading && (
        <p className="text-yellow-400 text-lg animate-pulse">
          Loading...
        </p>
      )}

      {error && (
        <p className="text-red-500 text-lg mb-6">
          Error: {error}
        </p>
      )}

      <div className="w-full max-w-2xl space-y-6">
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            <p className="text-gray-200 text-lg italic leading-relaxed mb-4">
              “{quote.quote}”
            </p>

            <p className="text-right text-sm font-semibold text-gray-400">
              — {quote.author}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
