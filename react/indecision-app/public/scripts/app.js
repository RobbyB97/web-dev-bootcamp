'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('build-it-visible.js is running..');

var $appRoot = document.getElementById('app');

var visible = 0;

var onBtnClick = function onBtnClick() {
  if (visible === 0) {
    visible = 1;
  } else {
    visible = 0;
  }
  render();
};

var ToggleVisibility = function (_React$Component) {
  _inherits(ToggleVisibility, _React$Component);

  function ToggleVisibility(props) {
    _classCallCheck(this, ToggleVisibility);

    var _this = _possibleConstructorReturn(this, (ToggleVisibility.__proto__ || Object.getPrototypeOf(ToggleVisibility)).call(this, props));

    _this.onToggle = _this.onToggle.bind(_this);
    _this.state = {
      visibility: false
    };
    return _this;
  }

  _createClass(ToggleVisibility, [{
    key: 'onToggle',
    value: function onToggle() {
      console.log('onToggle');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visibility Toggle'
        ),
        React.createElement(
          'button',
          { onClick: this.onToggle },
          this.state.visibility ? 'Hide details' : 'Show details'
        ),
        React.createElement(
          'p',
          null,
          this.state.visibility ? 'Here are some more details!' : ''
        )
      );
    }
  }]);

  return ToggleVisibility;
}(React.Component);

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onBtnClick },
      visible ? 'Hide details' : 'Show details'
    ),
    React.createElement(
      'p',
      null,
      visible ? "" : "Here are some more details m8"
    )
  );
  ReactDOM.render(React.createElement(ToggleVisibility, null), $appRoot);
};

render();
