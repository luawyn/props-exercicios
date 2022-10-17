import InfosUsuario from "./InfosUsuario";

export function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}
export function CardVideo(props) {
  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={props.card.imagem} alt={props.card.titulo} />
      <h4>{props.card.titulo}</h4>
      <InfosUsuario info={props.info} />
    </div>
  );
}

export default CardVideo;
