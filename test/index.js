// require all test files using special webpack feature
// https://webpack.github.io/docs/context.html#require-context
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);