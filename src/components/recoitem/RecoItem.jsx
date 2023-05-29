import s from './style.module.css';

export default function RecoItem({item, onClick}){

	const IMG  = import.meta.env.VITE_SM_IMG_URL;
	
	return <>
		<div onClick={() => onClick(item)} className={s.container} >
			<img className={s.image} alt={item.name} src={IMG+item.backdrop_path}/>
			<div className={s.titre}>{item.name}</div>
		</div>
	</>
}