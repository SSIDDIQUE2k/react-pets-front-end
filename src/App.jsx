// src/App.jsx

import { useState, useEffect } from 'react';

import * as petService from './services/petService';


import PetList from './components/PetList';




// src/App.jsx

const App = () => {
  const [petList, setPetList] = useState([]);

  // src/App.jsx

useEffect(() => {
  const fetchPets = async () => {
    try {
      const pets = await petService.index();
      // Don't forget the pass the error object to the new Error
      if (pets.error) {
        throw new Error(pets.error);
      }

      setPetList(pets);
    } catch (error) {
      // Log the error object
      console.log(error);
    }
  };
  fetchPets();
}, []);

// src/components/petList.jsx

return <PetList petList={petList} />;



};
// READ - GET - /pets



export default App;
