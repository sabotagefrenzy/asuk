import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'asuk_wishlist';

export function useWishlist() {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      // ignore
    }
  }, [wishlist]);

  const isInWishlist = useCallback(
    (id) => wishlist.includes(id),
    [wishlist]
  );

  const toggleWishlist = useCallback((id) => {
    setWishlist((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      return [...prev, id];
    });
  }, []);

  return { wishlist, isInWishlist, toggleWishlist };
}
