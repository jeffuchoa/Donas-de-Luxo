import React from "react";
import "./ui/hero.scss";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="informacoes">
        <div className="infos">
          <div className="objetivo">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fazendo você <br /> ser <span className="text-yellow-500">Única</span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Muito além de roupas, é  Autoestima, Bem-estar e Conexão.
            </p>

            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 transition text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2   md:mr-0">
              Entre em contato agora!
            </button>
          </div>
        </div>

        <div className="background2">
          <div className="fix"></div>
          <img src="/src/assets/wave-hero.svg" className="wave" alt="" />
          <img src="/src/assets/wave-hero2.svg" className="wave2" alt="" />
        </div>

        <img src="/src/assets/modelo.png" alt="" className="diva" />
      </div>
      <div className="degrade"></div>
      <img src="/src/assets/background.png" alt="" className="background" />
      <img src="/src/assets/background2.png" alt="" className="background3" />

    </section>
  );
}
