import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ChristmasItem from "./ChristmasItem";
import data from "./data.js";

const ChristmasList = () => {

  // Simula la data que vendría de una API
  // El estado inicial es el array de objetos
  const [items, setItems] = useState(data);

  // Estado del formulario
  const [values, setValues] = useState({
    title: '',
    description: '',
    price: 0,
    img_url: ''
});

const handleChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()

    // 2 maneras de acceder a los datos del formulario

    // 1. Leyendo el evento
    // const title = e.target.title.value;
    // const description = e.target.description.value;
    // const price = e.target.price.value;
    // const img_url = e.target.img_url.value;

    // const new_item = { title, description, price, img_url };
    // addItem(new_item)

    // 2. Leyendo un estado de valores actuales
    console.log(values)
    addItem(values)
}

  const renderItems = () => {
    return items.map((item, i) => <ChristmasItem data={item} key={uuidv4()} remove={()=>removeItem(i)}/>);
  };
  // estos métodos tienen que llamar a setItems()
  const addItem = (new_item) => {
    setItems([new_item,...items]); // actualiza estado items
  };
  const removeAllItems = () => {
    setItems([]); // actualiza estado items
  };
  const resetItems = () => {
    setItems(christmasProducts); // Cargar con datos iniciales de nuevo
  }
  const removeItem = (i) => {
    const remainingItems = items.filter((item,index)=>index!==i);
    setItems(remainingItems);
    alert(`Item borrado: ${items[i].title}`);
  };

  const editItem = (i) => {};



  return (
    <div>
      ChristmasList
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Título</label><br />
        <input type="text" name="title" onChange={handleChange} /><br />

        <label htmlFor="description">Description</label><br />
        <input type="text" name="description" onChange={handleChange} /><br />

        <label htmlFor="price">Precio</label><br />
        <input type="number" name="price" onChange={handleChange} /><br />

        <label htmlFor="url">URL imagen</label><br />
        <input type="url" name="img_url" onChange={handleChange} /><br />

        {values.title && values.description && values.img_url && values.price > 0 ?
        <button type="submit">Crear producto</button>:<b>Rellena todos campos para enviar</b>} 
        
        
      </form>

      <button onClick={removeAllItems}>Borrar todo</button>
      <button onClick={resetItems}>Recargar</button>
      <button onClick={()=>removeItem(0)}>Borrar primero</button>

      {renderItems()}
      {/* <ChristmasItem data={christmasProducts[0]}/>
    <ChristmasItem data={christmasProducts[1]}/>
    <ChristmasItem data={christmasProducts[2]}/>
    <ChristmasItem data={christmasProducts[3]}/> */}
      {/* <ChristmasItem title="zapatos" desc="Tus zapatos favoritos" img_url="foto.jpg"/>
    <ChristmasItem title="zapatos" desc="Tus zapatos favoritos" img_url="foto.jpg"/>
    <ChristmasItem title="zapatos" desc="Tus zapatos favoritos" img_url="foto.jpg"/> */}
    </div>
  );
};

export default ChristmasList;
