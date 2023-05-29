import s from './style.module.css';

export default function Logo({image, titre, subtitle}){

	return <>
		<div className={s.container}>
			<img className={s.image} src={image} />
			<span className={s.titre}>{titre}</span>
		</div>
		<span className={s.subtitle}>{subtitle}</span>
	</>
}