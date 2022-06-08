# 🎑 kettraworld.db


**como instalar?**
```
npm i kettraworld.db
```

# ⚙️ configurações

**Uso da db em json**

_"todas as opções estão listadas abaixo"_


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

# U^ｪ^U KellyWorld

Adicione: https://top.gg/bot/932705411897905193


# 📃 License

ฅ^•ﻌ•^ฅ este repositório está licenciado: https://apache.org/licenses/LICENSE-2.0
