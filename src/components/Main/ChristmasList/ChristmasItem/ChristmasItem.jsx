import React from "react";
import "./ChristmasItem.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ChristmasItem = ({ data, remove }) => {
  const { title, description, img_url, price } = data;
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={img_url}
      title="imageItem"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Titulo:{title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Descripción:{description}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Precio:{price}€
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={remove}>Borrar</Button>
    </CardActions>
  </Card>
    {/* <article>
      <h3>Titulo:{title}</h3>
      <p>Descripción:{description}</p>
      <p>Precio:{price}€</p>
      <img src={img_url} alt={title} className="picture_item" />
      <button onClick={remove}>Borrar</button>
    </article> */}
    </>
  );
};

export default ChristmasItem;
