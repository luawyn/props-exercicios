import React from "react";
import CardVideo from "./components/CardVideo";
import "./styles.css";

export default function App() {
  const objetoDoVideo = {
    imagem: "https://picsum.photos/400/400?a=1",
    titulo: "título do vídeo",
  };
  const infoDeUsuario = {
    imagem:
      "https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2020/06/14/863689/20200614172344185476a.jpg",
    autor: "Luana Franco Trevizani",
  };
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
            <CardVideo card={objetoDoVideo} info={infoDeUsuario} />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
