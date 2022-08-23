import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardComponent = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="auto"
                image={props.img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                399 VALIANT
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Donde quiera que estés, Donde quiera que vayas. En la ciudad o en la ruta, en invierno o en verano. El VALIANT es un casco modular doble visor, tan versátil que se convertirá en parte de ti. Está doblemente certificado como un FULL FACE y un CASCO ABIERTO. La apertura es de 180º brindando el macanismo mas estable del mundo, ofrece excelente visibilidad lateral e incluye Pinlock antifog, los visores son de fácil extracción, pesa sólo 1700 gr. y gracias a su material KPA es es tan cómodo y liviano que olvidarás que lo estás usando. ¿Qué más se puede pedir de un casco?
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default CardComponent;