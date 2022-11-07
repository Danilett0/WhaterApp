import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import Clouds from "vanta/dist/vanta.clouds.min";

export const useVanta = () => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(0);

  useEffect(() => {
    if (!vanta) {
      setVanta(
        Clouds({
          THREE,
          el: myRefDiv.current,
        })
      );
    }

    return () => {
      if (vanta) {
        vanta.destroy();
      }
    };
  }, [vanta]);

  return { myRefDiv };
};

export default useVanta;
