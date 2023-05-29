import s from './style.module.css';
import { Search as SearchIcon } from 'react-bootstrap-icons';

export default function SearchBar({ onSubmit }){

	function submit(event){
		if (event.key === 'Enter' && event.target.value.trim() !== ''){
			onSubmit(event.target.value);
		}
	}

	return <>
		<SearchIcon size={27} className={s.icon} />
		<input onKeyUp={submit} className={s.input} type="text" placeholder='Entre une série que tu adore!'/>
	</>
}