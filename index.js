'use strict';

function _checkEnvar(envar) {
  return {
    isOk: process.env.hasOwnProperty(envar)
  }
}

module.exports = {
  check: _checkEnvar
}