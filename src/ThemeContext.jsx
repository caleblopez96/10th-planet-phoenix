import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check for saved theme preference in localStorage on initial load
  const [isNightMode, setIsNightMode] = useState(() => {
    const savedTheme = localStorage.getItem("nightMode");
    return savedTheme === "true";
  });

  // Apply theme when component mounts
  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add("night");
      document.querySelectorAll("svg").forEach((svg) => {
        svg.classList.add("night");
      });
    } else {
      document.body.classList.remove("night");
      document.querySelectorAll("svg").forEach((svg) => {
        svg.classList.remove("night");
      });
    }
  }, []);

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => {
      const newMode = !prevMode;
      // Save theme preference to localStorage
      localStorage.setItem("nightMode", newMode);

      document.body.classList.toggle("night");
      document.querySelectorAll("svg").forEach((svg) => {
        svg.classList.toggle("night");
      });
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
