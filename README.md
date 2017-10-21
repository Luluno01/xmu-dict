# XMU-Dict
a dictionary of compus life for XMU students.

powered by [Sails](http://sailsjs.org).

# Setup
## Install sails.js
```
npm install sails -g
```

## Clone
```
cd some/working/directory/
git clone https://github.com/Luluno01/xmu-dict.git
```

## Install Dependencies
```
cd some/working/directory/xmu-dict/
npm install
```

## Run Server
```
sails lift
```
# API
*NOTE: All parameters are passed in request body or query string*
*NOTE: The default type of returned data is `JSON`*
|   url    |      parameter(s)      |   parameter data type   |  returns  |  request method  |
--------------------------------------------------------------------------------
| `grade/` | `username`, `password` |   `string`, `string`    |  `JSON`   |      `GET`       |

## grade/
Get the grade of an undergradute. 
Please note that there is a slash (`/`) after `grade`.

### Error Codes
| status | reason |
------------------
| `400`  | The server cannot find the username or password in request body or query string; The username doesn't match the password |
| `504`  | Remote server timeout |
| `502`  | Remote server error (the remote server returns an error which cannot be handler by this server); Unknown response from the remote server |

### Response Data Format
#### On Error
```@JSON
{
  status: {number} errorCode,
  msg: {string} errorMessage
}
```

#### On Success
```@JSON
[
  {
    name: {string} termName,
    subjects: [
      {
        name: {string} subjectName,
	credit: {string} credit,
	courseType: {string} courseType,
	takingType: {string} takingType,
	grade: {string} grade,
	specialReason: {string} specialReason,
	ranking: {string} ranking
      },
      // Some more subjects
    ]
  },
  // Some more terms
]
```
### Sample
#### Request
```@JavaScript
$.ajax({
  url: 'https://example.com/grade/',
  method: 'GET',
  data: {
    username: username,
    password: password
  },
  error: onErrorHandler,
  success: onSuccessHandler
});
```
or
```@JavaScript
$.get('https://example.com/grade/?username=' + username + '&password=' + password, function(data, status){
  // Do something here
});
```

