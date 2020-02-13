import useLocalStorage from './useLocalStorage';
import {useEffect} from 'react';


const useDarkMode = (key, initialvalue) => {
    const [ darkModeEnabled, setDarkModeEnabled ] = useLocalStorage(key, initialValue);

    const toggleDarkMode = e => {
        e.preventDefault();


 useEffect(() => {
        return darkModeEnabled ? setDarkModeEnabled(false) : setDarkModeEnabled(true);

        if (darkModeEnabled == true) {
            document.body.classList.add("dark-mode");
          } else {
            document.body.classList.remove("dark-mode");
          }
        }, [ darkModeEnabled ]);
      
        return [ darkModeEnabled, setDarkModeEnabled, toggleDarkMode ];
      };
      
      export default useDarkMode 