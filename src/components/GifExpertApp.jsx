import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  //const categorias = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categorias, setCategorias] = useState(["Dragon Ball"]);

  //const handleAdd = () => {
  //    setCategorias([...categorias, "Kimetsu no Yaiba"])
  //}

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />

      <ol>
        {categorias && categorias.map((item, id) => <GifGrid key={item} categoria={item}/>)}
      </ol>
    </>
  );
};

export default GifExpertApp;
