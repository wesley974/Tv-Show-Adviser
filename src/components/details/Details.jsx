import s from './style.module.css';
import Rating from '../rating/Rating';

export default function Details({details}){

	const rating = details.vote_average / 2;

	return <>
		<div className={s.title}>{details.name}</div>

		<div className={s.rating_container}>
			<Rating rating={rating} />
			<div className={s.rating}>{rating}/5</div>
		</div>		
		
		<div className={s.overview}>{details.overview ? details.overview : 'Aucune description de disponible.'}</div>
	</>
}