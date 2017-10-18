const Convention = require('capture/Convention.js');
const STATUS = Convention.STATUS;
const DATA_TYPE = Convention.DATA_TYPE;
const interfaces = {
  grade: require('capture/GradeInterface.js')
};

module.exports = {
  /**
   * @param {option} may contain username and password
   */
  grade: function(option, res) {
    function callback(result) {
      switch(result.status) {
        case STATUS.OK: res.ok(result.data); break;
        case STATUS.TIMEOUT: res.timeout(); break; // 504
        case STATUS.SERVER_FAILURE: res.bad(); break; // 502
        default: res.bad(); // 502
      }
    }
    interfaces.grade(option, callback);
  },
  elec: function(option, res) {

  }
};