import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('authToken'); // Adjust according to your auth mechanism
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
};

