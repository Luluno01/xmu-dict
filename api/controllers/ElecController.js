/**
 * ElecController
 *
 * @description :: Server-side logic for managing electricity inquiry
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  '': function(req, res) {
    const method = req.method.toUpperCase();
    const requiredParam = ['drxiaoqu', 'drlou', 'txtRoomid', 'dxdateStart_Raw', 'dxdateEnd_Raw'];
		const handler = {
			POST: () => {
				res.ok('POST: Elec page');
			},
			GET: () => {
        for(var index in requiredParam) {
          if(!req.param(requiredParam[index])) {
            res.badRequest();
            return;
          }
        }
				CaptureService.elec({
					drxiaoqu: req.param('drxiaoqu'),
          drlou: req.param('drlou'),
          txtRoomid: req.param('txtRoomid'),
          dxdateStart_Raw: req.param('dxdateStart_Raw'),
          dxdateEnd_Raw: req.param('dxdateEnd_Raw')
				}, res);
			}
		};
		if(method in handler) {
			handler[method]();
		} else {
			res.badRequest('Unsupported method: ' + method);
		}
  },
  info: function(req, res) {
    res.ok(BasicInfoService.elec);
  }
};

