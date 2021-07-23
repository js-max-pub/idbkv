# idbkv

index-db key-value only store  
less than 0.7 kb minified   
less than 0.4 kb gzipped  


```javascript
import KV from 'https://jsv.max.pub/idbkv/1.0/mod.js';

// save data:
KV.john = {name: 'John Doe', birthday: '2020-02-03'}

// load data:
await KV.john  // -> {name: 'John Doe', birthday: '2020-02-03'}

// show all available keys:
await KV.keys    // -> ['john']

// delete data:
delete KV.john  // -> removed from DB

```


[[./test.htm]]