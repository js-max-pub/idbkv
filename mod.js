// index db key-value only store

let DB = null;
let S = 'default';
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
		DB.createObjectStore(S);
		event.target.transaction.oncomplete = e => resolve(DB);
	}
})


let DO = (DB, method, parameter = []) => new Promise((resolve, reject) => {
	// console.log('DO', DB, method, parameter)
	DB.transaction([S], "readwrite").objectStore(S)[method](...parameter).onsuccess = async event => {
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
			// case 'keys': return IDB().then(DB => DO(DB, 'getAllKeys'))
			case Symbol.asyncIterator: return async function* () {
				let keys = await IDB().then(DB => DO(DB, 'getAllKeys'))
				// console.log("---keys", keys)
				for (let key of keys)
					yield key
				// yield [key, await X[key]]
			}
			default: return IDB().then(DB => DO(DB, 'get', [key]))
		}
	}
})
// X[Symbol.asyncIterator] = () =>  IDB().then(DB => DO(DB, 'getAllKeys'))
export default X;



			// case Symbol.iterator: () => {

			// 	// ...it returns the iterator object:
			// 	// 2. Onward, for..of works only with this iterator, asking it for next values
			// 	return {
			// 		current: 1,
			// 		last: 10,

			// 		// 3. next() is called on each iteration by the for..of loop
			// 		next() {
			// 			// 4. it should return the value as an object {done:.., value :...}
			// 			if (this.current <= this.last) {
			// 				return { done: false, value: this.current++ };
			// 			} else {
			// 				return { done: true };
			// 			}
			// 		}
			// 	};
			// }
			// case 'k2': return X.keys













			// case Symbol.asyncIterator: return () => {
			// 	IDB().then(DB => DO(DB, 'getAllKeys')).then(keys => {
			// 		console.log("---keys", keys)
			// 		return {
			// 			i: 0,
			// 			next() {
			// 				console.log('i', this.i)
			// 				if (this.i < keys.length) {
			// 					// return { value: keys[this.i++], done: false }
			// 					return Promise.resolve({ value: keys[this.i++], done: false });
			// 				}
			// 				// return { done: true }
			// 				return Promise.resolve({ done: true });
			// 			}
			// 		}

			// 	})
			// }