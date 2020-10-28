// index db key-value only store

let DB = null;
const IDB = () => new Promise((resolve, reject) => {
	if (DB) return resolve(DB);
	// let STORE = null;
	let REQ = window.indexedDB.open('IDBKV', 1);
	REQ.onsuccess = event => {
		DB = event.target.result
		resolve(DB)
	}
	REQ.onupgradeneeded = event => {
		DB = event.target.result
		DB.createObjectStore('store');
		event.target.transaction.oncomplete = e => resolve(DB);
	}
})


let DO = (DB, method, parameter = []) => new Promise((resolve, reject) => {
	// console.log('DO', DB, method, parameter)
	DB.transaction(['store'], "readwrite").objectStore('store')[method](...parameter).onsuccess = async event => {
		// console.log('DO success', method, parameter, event.target.result)
		resolve(event.target.result);
	};
});



let X = new Proxy({}, {
	deleteProperty(target, key) {
		return IDB().then(DB => DO(DB, 'delete', [key]))

	},
	set: (target, key, value) => {
		return IDB().then(DB => DO(DB, 'put', [value, key]))
	},
	get: (target, key) => {
		switch (key) {
			case 'keys': return IDB().then(DB => DO(DB, 'getAllKeys'))
			// case 'k2': return X.keys
			default: return IDB().then(DB => DO(DB, 'get', [key]))
		}
	}
})
export default X;











