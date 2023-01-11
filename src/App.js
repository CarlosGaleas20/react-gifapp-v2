import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const App = () => {

  const [categories, setCategories] = useState(['Digimon', 'Fairy Tail']);

  const onSendCategory = ( value ) => {
    if ( categories.includes(value) ) return;
    setCategories([value, ...categories]);
  }

  return (
    <>
      <h1>Gif App</h1>

      { /* Form for add categories */ }
      <AddCategory 
        onSendCategory = {onSendCategory}
      />

      { /* Listado de categorias */}
        {categories.map((category) => (
          <GifGrid
            key = { category }
            category = { category }
          />
        ))}
    </>
  );
}

export default App;
