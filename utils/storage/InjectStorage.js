import storage from './localStorage.js'
export default (object)=>{
	object.prototype.storage = storage
	return object
}