'use strict';

module.exports.handler = (event, context, cb) => {
  return {
    statusCode: 200,
    body: JSON.stringify('Hello world!'),
  };
};
