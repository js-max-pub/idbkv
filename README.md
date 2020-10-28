# idbkv

index-db key-value only store


```javascript
import DB from 'https://max.pub/idbkv/min.js';
DB.person = {
	name: 'John Doe',
	birtday: '2020-02-03'
}

let person = await DB.person

let allKeys = await DB.keys


delete DB.person 
```