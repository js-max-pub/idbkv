# idbkv

index-db key-value only store  
less than 0.7 kb minified   
less than 0.4 kb gzipped  


```javascript
import KV from 'https://jsv.max.pub/idbkv/1.0/mod.js';

// save data:
KV.john = { name: 'John Doe', birthday: '2020-02-03' }
KV.adam = { name: 'Adam Smith', birthday: '1900-01-01' }

// for (let key in DB)
// 	console.log('key', key)

console.log(await KV.keys)
console.log(await KV.john)
console.log(await KV.adam)

// delete data:
delete KV.john  // -> removed from DB

console.log(await KV.keys)

```