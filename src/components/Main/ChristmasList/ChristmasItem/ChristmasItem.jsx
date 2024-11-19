import React from "react";
import "./ChristmasItem.css";

const ChristmasItem = ({ data, remove }) => {
  const { title, description, img_url, price } = data;
  return (
    <article>
      <h3>Titulo:{title}</h3>
      <p>Descripción:{description}</p>
      <p>Precio:{price}€</p>
      <img src={img_url} alt={title} className="picture_item" />
      <button onClick={remove}>Borrar</button>
    </article>
  );
};

export default ChristmasItem;
