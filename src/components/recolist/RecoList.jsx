import s from './style.module.css';
import RecoItem from '../recoitem/RecoItem';

export default function RecoList({list, onClickItem}){

	return <>
		<div className={s.titre}>Vous pourriez aussi aimé 💡</div>
		<div className={s.list}>
			{
				list.map((i) => {

					return <span key={i.id} className={s.item}><RecoItem onClick={onClickItem} item={i} /></span>


				})
			}

		</div>	

	</>
}