import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(async () => {
    getGifs(categoria).then((imgs) => {
      setstate({
        data: imgs,
        loading: false,
      });
      console.log(imgs);
    });
  }, [categoria]);

  return state; //
};
