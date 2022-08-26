import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const CardComponent = (props) => {
    return (
        <Card  sx={{ maxWidth: 350,}} >
            <CardMedia 
                component="img"
                height="auto"
                image={props.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Agregar producto</Button>
                <Button size="small">Quitar producto</Button>
            </CardActions>
        </Card>
        
        
    );
}

export default CardComponent;