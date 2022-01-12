import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ categoria }) => {
  //const [images, setImages] = useState([]);
  const {data, loading} = useFetchGifs(categoria)


  

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{categoria}</h3>

      {loading && <p className="animate__animated animate__flash">Loading...</p>}

      <div className="card-grid">
        {data && data.map((img) => <GifGridItem key={img.id} {...img} />)}
      </div>
    </>
  );
};

export default GifGrid;
