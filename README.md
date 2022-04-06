# 🎑 kettraworld.db

<img src="https://media0.giphy.com/media/l49JMXqhPSZiaYNag/giphy.gif?cid=ecf05e47bsa3hf37bogyp6qno8kkx60gvvxq36hs4jfhjsop&rid=giphy.gif&ct=s" width="125" height="125">

<a href='https://ko-fi.com/Z8Z6BKCU0' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

**how to install?**
```js
npm i kettraworld.db
```

# ⚙️ settings 

**Uso da db em json**

_db is in `.json` you can use seeing the following examples_

```js
const { JsonDatabase } = require('kettraworld.db');

const db = new JsonDatabase({
  DatabaseJson:"./src/database/database.json"
});


db.set("valor", 1);
db.get("valor");
db.fetch("valor");
db.has("valor");
db.exists("valor");
db.all();
db.fetchAll();
db.delete("valor");
db.deleteAll();
db.math("valor","*", 3);
db.add("valor", 10);
db.substr("valor", 5);
db.includes("tes");
db.startsWith("t");
db.push("valorArray", 10);
db.pull("valorArray", (element, index, array) => element < 10, true); 
db.valueArray();
db.keyArray();
db.findAndDelete((element,db) => {
    return element.ID.includes("valor");
});
db.destroy();
```

**Uso mysql**

_mysql connect to your database_

```js
const { mysql } = require('kettraworld.db')
const connection =  mysql.createConnection({
  host            : `${process.env.host}`,
  user            : `${process.env.user}`,
  password        : `${process.env.senha}`,
  database        : `${process.env.database}`
});

setInterval(function() {
connection.query('SELECT * FROM transacao WHERE status_transacao = 0', function (error, results, fields) {
  if (error) throw error;
  const uuid = results[0]?.uuid;
  const nick = results[0]?.nick;
  const id_pacote = results[0]?.id_pacote;
  const data_transacao = results[0]?.data_transacao;
  console.log(results)
  if (id_pacote === 1 ) {
     console.log(`NICK: ${nick}`);
     connection.query('DELETE FROM transacao WHERE transacao.uuid = ?', [`${uuid}`] , function(err, rows, fields) {
});
}
 // parou aqui!
}); 
}, 60000);
```
**Uso .env**

_env environment variables from a `.env` file in process.env_

_Create a file called `.env` at the root of your project:_
```js
SECRET_KEY=YOUR_SECRET_KEY
```
_in the main file just import and use!_
```js
const dotenv = require("kettraworld.db");

console.log(process.env.SECRET_KEY) // Will return Value: YOUR_SECRET_KEY


```



# ❤️ Donation 

you have the power to make a difference, make a donation of any symbolic value for our developers to have a good coffee ☕

🌟 Make your donation [by clicking here!](https://ko-fi.com/sebastianjn007)

# 📃 License

ฅ^•ﻌ•^ฅ this repository is licensed: https://apache.org/licenses/LICENSE-2.0
