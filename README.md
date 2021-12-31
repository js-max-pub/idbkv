# idbkv

index-db key-value only store  
less than 0.7 kb minified   
less than 0.4 kb gzipped  


```javascript
import DB from 'https://max.pub/idbkv/min.js';
// import DB from 'https://ver.max.pub/max-pub/idbkv/20oct/raw.js';

// save data:
DB.john = {name: 'John Doe', birthday: '2020-02-03'}

// load data:
await DB.john  // -> {name: 'John Doe', birthday: '2020-02-03'}

// show all available keys:
await DB.keys    // -> ['john']

// delete data:
delete DB.john  // -> removed from DB

```