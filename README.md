# XMU-Dict

A dictionary of compus life for XMU students.

*powered by [Sails](http://sailsjs.org).*

# Content

1. [Setup](#setup)
    1. [Install sails.js](#install-sailsjs)
    2. [Clone](#clone)
    3. [Install Dependencies](#install-dependencies)
    4. [Create local.js](#create-localjs)
    5. [Setup Database](#setup-database)
    6. [Run Server](#run-server)
2. [API](#api)

# Setup

## Install sails.js

```@Shell
npm install sails -g
```

## Clone

```@Shell
cd some/working/directory/
git clone https://github.com/Luluno01/xmu-dict.git
```

## Install Dependencies

```@Shell
cd some/working/directory/xmu-dict/
npm install
```

## Create local.js

Create `local.js` in `/config/` directory, open && edit
```
module.exports = {

};
```
then save && close

## Setup Database

XMU-Dict uses cache so a database is required. Please follow several steps below to setup database:

1. Install MySQL (or some other database, but you would need to modify `/config/connections.js` and `/config/models.js` by yourself if you don't use MySQL)
2. Create a database (Collation: `utf8`).
3. Configure connections. Add database connection settings in `/config/local.js`:
```
module.exports = {
  // Some codes
  mysql: {
    adapter: 'sails-mysql', // Or some other adapter if you don't use MySQL
    host: databaseHost,
    user: username, //optional
    password: password, //optional
    database: databaseName //optional
  }
  // Some codes
}
```
For more details about database connection of `sails.js`, [click me](http://sailsjs.com/documentation/concepts/models-and-orm)

## Run Server

```@Shell
sails lift
```
# API

*NOTE: All parameters are passed in request body or query string*

*NOTE: The default type of returned data is `JSON`*

For more details, [click me](https://github.com/Luluno01/xmu-dict/wiki/APIs).