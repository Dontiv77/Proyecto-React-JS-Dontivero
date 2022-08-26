import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Contador from '../ItemCounts/ItemCounts';

const CardUser = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 345, margin: 10 }}>
			<CardActionArea>
				<CardMedia component='img' image={data.image} alt='green iguana' sx={{width: 300}}/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{data.title}
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

export default CardUser;