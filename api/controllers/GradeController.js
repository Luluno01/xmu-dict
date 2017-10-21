/**
 * GradeController
 *
 * @description :: Server-side logic for managing grades
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'': function(req, res) {
		const method = req.method.toUpperCase();
		const handler = {
			POST: () => {
				res.ok('POST: Grade page');
			},
			GET: () => {
				if(!req.param('username') || !req.param('password')) {
					res.badRequest();
					return;
				}
				CaptureService.grade({
					username: req.param('username'),
					password: req.param('password')
				}, res);
			}
		};
		if(method in handler) {
			handler[method]();
		} else {
			res.badRequest('Unsupported method: ' + method);
		}
	}
};

