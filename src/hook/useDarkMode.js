import React, {useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

export const useDarkMode = () => {
const [darkMode /* holding data */, setDarkMode /* controlling data */ ] = useLocalStorage('dark-mode');
    
    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode'): document.body.classList.remove('dark-mode')
    }, [darkMode]);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };
    
    return [darkMode, toggleMode];
}

