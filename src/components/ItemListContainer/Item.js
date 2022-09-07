import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Contador from '../ItemCounts/ItemCounts';

const Item = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 345, margin: 10 }}>
			<CardActionArea>
				<CardMedia component='img' image={data.image} alt='green iguana' sx={{width: 300}}/>
				<CardContent>
					<Typography gutterBottom variant='h6' component='div'>
						{data.title}
					</Typography>
					<Typography gutterBottom variant='h4' component='div'>
						{data.category}
					</Typography>
                    <Typography variant='body2' color='text.secondary'>
						${data.price}
					</Typography>
				</CardContent>
			</CardActionArea>
            <Contador />
		</Card>
	);
};

export default Item;