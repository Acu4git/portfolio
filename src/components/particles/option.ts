import { type ISourceOptions } from "@tsparticles/engine";

const myOption: ISourceOptions = {
  background: {
    color: "#2b2b2b", // 背景色
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: "#ffffff", // パーティクルの色
    },
    links: {
      color: "#ffffff", // パーティクル間のリンク色
      distance: 150, // リンクの距離
      enable: true, // リンクを有効化
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none", // 動きの方向
      enable: true, // パーティクルを動かすか
      outModes: "bounce", // パーティクルが画面外に出たときの動作
      random: false,
      speed: 2, // 速度
      straight: false,
    },
    number: {
      density: {
        enable: true, // パーティクル数の調整を有効化
      },
      value: 80, // パーティクルの数
    },
    opacity: {
      value: 0.5, // 不透明度
    },
    shape: {
      type: "circle", // 形状
    },
    size: {
      value: 5, // パーティクルのサイズ
    },
  },
  detectRetina: true, // Retinaディスプレイでの対応
};

export default myOption;
