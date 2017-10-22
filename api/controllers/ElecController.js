/**
 * ElecController
 *
 * @description :: Server-side logic for managing electricity inquiry
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  info: function(req, res) {
    res.ok(BasicInfoService.elec);
  }
};

