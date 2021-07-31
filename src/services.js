
export const getSingleDayData = async(date) => {
	try{
	     const response = await fetch(`/api/dayp/${date}`);
	     const data = await response.json();	
		 return data;
	} catch(err) {
		throw new Error(err.message);
	}
}



export const getSingleWeekData = async(date) => {
	try{
	     const response = await fetch(`/api/week/${date}`);
	     const data = await response.json();	
		 return data;
	} catch(err) {
		throw new Error(err.message)
	}
}
