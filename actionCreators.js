export function addItem (item, id) {
	return {
		type: 'ADDITEM',
		item: item,
		completed: false
	}
}
export function removeItem(id){
	return {
		type: 'REMOVEITEM',
		id: id
	}
}

export function editItem(id, text){
	return {
		type: 'EDITITEM',
		id: id,
		text: text
	}
}
export function getItems(){
	type: 'GETITEMS'
}
export function completeItem(id, val){
	return {
		type: 'COMPLETEITEM',
		id: id,
		completed: val

	}
}