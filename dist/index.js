'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGiphySelect = require('react-giphy-select');

var _reactGiphySelect2 = _interopRequireDefault(_reactGiphySelect);

require('react-giphy-select/lib/styles.css');

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*** src/index.js   ***/
var MyComponent = function MyComponent() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Hello from My Component'
        ),
        _react2.default.createElement(
            'p',
            null,
            'here are some gifs'
        ),
        _react2.default.createElement(_reactGiphySelect2.default, null)
    );
};
exports.default = MyComponent;