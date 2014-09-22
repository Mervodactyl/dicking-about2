// this is the route to the database

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'dicking-about2'
    },
    port: 3000,
    db: 'postgres://localhost/dicking_about2_development'

  },

  test: {
    root: rootPath,
    app: {
      name: 'dicking-about2'
    },
    port: 3000,
    db: 'postgres://localhost/dicking_about2_test'

  },

  production: {
    root: rootPath,
    app: {
      name: 'dicking-about2'
    },
    port: 3000,
    db: 'postgres://localhost/dicking_about2_production'

  }
};

module.exports = config[env];
