import React, { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // エンジンローダー
import { initParticlesEngine, Particles } from "@tsparticles/react"; // パーティクルコンポーネント
import myOption from "./option";
import AppRouter from "@/router/AppRouter";

const App: React.FC = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          options={myOption}
          className="absolute -z-10"
        />
        <AppRouter />
      </>
    );
  }

  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
