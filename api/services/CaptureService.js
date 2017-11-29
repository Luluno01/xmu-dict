const Convention = require('capture/Convention.js');
const STATUS = Convention.STATUS;
const ERR_MSG = Convention.ERR_MSG;
const DATA_TYPE = Convention.DATA_TYPE;
const interfaces = {
  grade: require('capture/GradeInterface.js'),
  elec: require('capture/ElecInterface.js')
};

module.exports = {
  /**
   * @param {option} may contain username and password
   */
  grade: function(option, res) {
    function callback(result) {
      switch(result.status) {
        case STATUS.OK: res.ok(result.data); break;
        case STATUS.TIMEOUT: res.timeout(ERR_MSG.TIMEOUT); break; // 504
        case STATUS.SERVER_FAILURE: res.bad(ERR_MSG.SERVER_FAILURE); break; // 502
        case STATUS.UNKNOWN_RESPONSE: res.bad(ERR_MSG.UNKNOWN_RESPONSE); break; // 502
        case STATUS.USERNAME_OR_PASSWORD_ERROR: res.badRequest(ERR_MSG.USERNAME_OR_PASSWORD_ERROR); break; // 400
        default: res.bad(); // 502
      }
    }
    interfaces.grade(option, callback);
  },
  elec: function(option, res) {
    function callback(result) {
      switch(result.status) {
        case STATUS.OK: res.ok(result.data); break;
        case STATUS.TIMEOUT: res.timeout(ERR_MSG.TIMEOUT); break; // 504
        case STATUS.SERVER_FAILURE: res.bad(ERR_MSG.SERVER_FAILURE); break; // 502
        case STATUS.UNKNOWN_RESPONSE: res.bad(ERR_MSG.UNKNOWN_RESPONSE); break; // 502
        case STATUS.USERNAME_OR_PASSWORD_ERROR: res.badRequest(ERR_MSG.USERNAME_OR_PASSWORD_ERROR); break; // 400
        default: res.bad(); // 502
      }
    }
    interfaces.elec(option, callback);
  }
};