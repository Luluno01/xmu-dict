var res;
var req;
var err;

function onError(err) {
  console.log(err);
}
function onSuccess(data) {
  console.log('Success!');
  console.log(data);
}
var states = {
  getSessionID: {
    url: 'http://ssfw.xmu.edu.cn/cmstar/index.portal',
    method: 'get',
    callback: ((err, _res) => {
      if(err || !_res.ok) {
        console.log('Cannot get session id. ' + err);
        onError(err);
      } else {
        console.log('Session ID get');
        console.log(_res.text);
        res = _res;
        // automata.transit('login');
      }
    })
  },
  login: {
    url: 'http://ssfw.xmu.edu.cn/cmstar/userPasswordValidate.portal',
    method: 'post',
    type: 'form',
    data: {
      'Login.Token1': '22920152203933',
      'Login.Token2': '',
      'goto': 'http://ssfw.xmu.edu.cn/cmstar/loginSuccess.portal',
      'gotoOnFail': 'http://ssfw.xmu.edu.cn/cmstar/loginFailure.portal'
    },
    callback: ((err, _res) => {
      if(err || !_res.ok) {
        // TODO: Mark off timeout error
        console.log('Login failed. ' + err);
        onError(err);
      } else {
        console.log(_res.text);
        res = _res;
        // automata.transit('main');
      }
    })
  }
};
// automata.transit('getSessionID');
// automata.transit('login');
// automata.transit('getSessionID');
const superagent = require('superagent');
require('superagent-charset')(superagent);

var agent = superagent.agent();

var handler = function(_err, _res) {
	if (_err || !_res.ok) {
		//do something
		console.log('ERROR!');
		res = _res;
		err = _err;
		if(_res && _res.status) {
			console.log('Response text: ' + _res.text);
		}
	} else {
		//do something
		console.log('Success?');
		res = _res;
		console.log(_res.text);
		console.log(_res.status);
	}
}

function ajax(option) {
  option = {
    url: option.url,
    method: option.method.toLowerCase() || 'get',
    type: option.type,
    data: option.data,
    callback: option.callback || (() => {})
  };
  req = agent[option.method](option.url);
  if(option.type == 'form') {
    console.log('data type: form');
    req = req.type('form');
  }
  if(option.data) {
    req = req.send(option.data); // json or string
    console.log(option.method + ' data: ' + (typeof option.data == 'object' ? JSON.stringify(option.data, ' ', 2) : option.data));
    if(global.sails) sails.log.verbose(req._formData);
  }
  req = req.end(option.callback);
}
ajax(states.getSessionID);
ajax(states.login);

// var req = agent.get('http://ssfw.xmu.edu.cn/cmstar/index.portal?.pn=p1201_p3535').end(handler);
// var req = agent.post('http://ssfw.xmu.edu.cn/cmstar/userPasswordValidate.portal').type('form').send({
// 	'Login.Token1':'22920152203933',
// 	'Login.Token2': '',
// 	'goto': 'http://ssfw.xmu.edu.cn/cmstar/loginSuccess.portal',
// 	'gotoOnFail': 'http://ssfw.xmu.edu.cn/cmstar/loginFailure.portal'
// }).end(handler);
// var req = agent.get('http://ssfw.xmu.edu.cn/cmstar/index.portal?.pn=p1201_p3535').end(handler);