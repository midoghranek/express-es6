"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _settings = require("./settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(_settings.port, function () {
  console.log("App listening at http://localhost:" + _settings.port);
});