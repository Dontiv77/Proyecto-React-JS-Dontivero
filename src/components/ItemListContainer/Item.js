import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Item = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 345, margin: 10 }}>
			<CardActionArea>
				<CardMedia component='img' image={data.imagen} alt='green iguana' sx={{width: 300}}/>
				<CardContent>
					<Typography gutterBottom variant='h6' component='div'>
						{data.nombre}
					</Typography>
					<Typography gutterBottom variant='h4' component='div'>
						{data.categoria}
					</Typography>
                    <Typography variant='body2' color='text.secondary'>
						${data.precio}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default Item;