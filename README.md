# dynacon

Dynamic SVG favicon server ‒ usable as a **library** *and* a **CLI**.

---

## Install

```bash
npm install dynacon
# or directly run with:
# npx dynacon
```

## As a CLI

```bash
npx dynacon --port 4000
# → http://localhost:4000
```

Options  
* `--port, -p` Port to listen on (default = 3112).  
* `--dir,  -d` Serve files from this directory (default = package’s `public`).

## As a library

```js
// example.js
const express = require('express');
const { createDynacon } = require('dynacon');

const app = express();
app.use(createDynacon());          // mounts at '/'
app.listen(8080);
```

---

Static demo assets are located in `public/`.  
Licensed CC0 1.0.
