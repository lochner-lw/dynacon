const express = require('express');
const path = require('path');

/**
 * Returns an express.Router that serves the dynacon demo.
 *
 * @param {Object} opts
 * @param {string} [opts.directory] - Directory to serve (defaults to ./public).
 * @returns {express.Router}
 */
function createDynacon(opts = {}) {
  const directory = opts.directory || path.join(__dirname, 'public');

  const router = express.Router();
  router.use(express.static(directory));
  router.get('/', (_, res) => {
    res.sendFile(path.join(directory, 'index.html'));
  });

  return router;
}

/**
 * Convenience helper to spin up a standalone server.
 *
 * @param {Object} opts
 * @param {number} [opts.port=3112] - TCP port.
 * @param {string} [opts.directory]  - Static directory.
 * @returns {import('http').Server}
 */
function startServer(opts = {}) {
  const port = opts.port || 3112;
  const app = express();
  app.use(createDynacon(opts));

  return app.listen(port, () => {
    // Verbose output as requested
    console.log('[dynacon] server running at http://localhost:' + port);
    console.log('[dynacon] serving directory:', opts.directory || path.join(__dirname, 'public'));
  });
}

module.exports = { createDynacon, startServer };
