# idbkv

index-db key-value only store  
less than 0.7 kb minified   
less than 0.4 kb gzipped  


```javascript
import KV from 'https://jsv.max.pub/idbkv/2021-07/mod.js';

// save data:
KV.john = {name: 'John Doe', birthday: '2020-02-03'}

// load data:
await KV.john  // -> {name: 'John Doe', birthday: '2020-02-03'}

// iterate over all available keys:
for await (let key of KV)
	console.log('key:', key)  // -> only 'john' for now

// delete data:
delete KV.john  // -> removed from DB

```


[[./test.htm]]