const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default class TV {
	static async Populars(){

		try {
			const res = await fetch(`${BASE_URL}/tv/popular${API_KEY}`);
			const data = await res.json();
			return data.results
		} catch (error){
			alert ("exemple d'erreur");
			console.error(error);
		}
	}

	static async Reco(currentId){
		const res = await fetch(`${BASE_URL}/tv/${currentId}/recommendations${API_KEY}`);
		const data = await res.json();
		return data.results
	}

	static async searchSerie(name){
		const res = await fetch(`${BASE_URL}/search/tv${API_KEY}&query=${name}`);
		const data = await res.json();
		return data.results
	}
}