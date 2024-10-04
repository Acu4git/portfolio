import { useEffect, useState } from "react";
import myLogo from "/kyoropon.svg";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation: number) => prevRotation + 5);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className="w-screen h-screen bg-slate-400 flex justify-center items-center flex-col">
        <motion.img
          src={myLogo}
          className="w-32 h-32 object-cover"
          style={{ rotate: rotation }}
          transition={{ duration: 0.1 }}
        ></motion.img>
        <h2 className="font-bold text-5xl text-gray-700">404 Not Found</h2>
        <p>'{location.pathname}' is not exist.</p>
        <p>(SSRしていないので，ステータスコードは404になってません．)</p>
      </div>
    </>
  );
};

export default NotFound;
