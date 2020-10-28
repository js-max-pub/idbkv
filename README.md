# idbkv

index-db key-value only store  
less than 0.7 kb


```javascript
import DB from 'https://max.pub/idbkv/min.js';

// save data:
DB.person = {
	name: 'John Doe',
	birtday: '2020-02-03'
}

// load data:
await DB.person

// delete data:
delete DB.person 

// show all available keys:
await DB.keys

```