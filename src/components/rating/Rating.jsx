import s from './style.module.css';
import {StarFill, StarHalf, Star as StarEmpty} from 'react-bootstrap-icons';

export default function Rating({rating}){

	/* [plein, dec, vide] */
	const stars = [];
	
	const plein = Math.trunc(rating);
	const dec = rating % 1;

	let index = 0;
		
	for (let i = 0; i < plein; i++) {
    	stars.push(<StarFill key={'StarFill'+ i} />);
    	index = i;
  	}

  	if (dec > 0.4){
  		stars.push(<StarHalf key={'StarHalf'+ index} />)
  	}

  	const vide = 5 - stars.length;	
	for (let i = 0; i < vide; i++) {
    	stars.push(<StarEmpty key={'StarEmpty'+ i} />);
  	}

	return <>
		{stars}
	</>
}