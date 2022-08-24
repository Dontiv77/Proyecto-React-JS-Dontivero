import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardComponent = (props) => {
    return (
        <Card sx={{ maxWidth: 300, }}>
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
                    El VALIANT es un casco modular doble visor, está doblemente certificado como un FULL FACE y un CASCO ABIERTO. La apertura es de 180º brindando el macanismo mas estable del mundo, ofrece excelente visibilidad lateral e incluye Pinlock antifog.
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