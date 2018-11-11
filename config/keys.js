// figure out the set of credentials to return for dev or prod
if (process.env.NODE_ENV === 'production') {
  // we're in production
  module.exports = require('./prod');
} else {
  // we're in dev
  module.exports = require('./dev');
}
