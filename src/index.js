'use strict';

const SqlString = require('sqlstring');

const Connection = require('../lib/mysql/connection.js');
const ConnectionConfig = require('../lib/mysql/connection_config.js');
const parserCache = require('../lib/mysql/parsers/parser_cache');

exports.createConnection = function(opts) {
  return new Connection({ config: new ConnectionConfig(opts) });
};

exports.connect = exports.createConnection;
exports.Connection = Connection;


exports.createQuery = Connection.createQuery;




exports.createServer = function(handler) {
  const Server = require('../lib/mysql/server.js');
  const s = new Server();
  if (handler) {
    s.on('connection', handler);
  }
  return s;
};


exports.escape = SqlString.escape;
exports.escapeId = SqlString.escapeId;
exports.format = SqlString.format;
exports.raw = SqlString.raw;

exports.__defineGetter__(
  'createConnectionPromise',
  () => require('./src/promise.js').createConnection
);

exports.__defineGetter__(
  'createPoolPromise',
  () => require('./src/promise.js').createPool
);

exports.__defineGetter__(
  'createPoolClusterPromise',
  () => require('./src/promise.js').createPoolCluster
);

exports.__defineGetter__('Types', () => require('../lib/mysql/constants/types.js'));

exports.__defineGetter__('Charsets', () =>
  require('../lib/mysql/constants/charsets.js')
);

exports.__defineGetter__('CharsetToEncoding', () =>
  require('../lib/mysql/constants/charset_encodings.js')
);

exports.setMaxParserCache = function(max) {
  parserCache.setMaxCache(max);
};

exports.clearParserCache = function() {
  parserCache.clearCache();
};
