'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('counter-example-states.js');

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.onIncrement = _this.onIncrement.bind(_this);
    _this.onDecrement = _this.onDecrement.bind(_this);
    _this.onReset = _this.onReset.bind(_this);
    _this.state = {
      count: 0,
      title: 'Count: '
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var json = localStorage.getItem('count');
      var count = parseInt(json, 10);
      if (!isNaN(count)) {
        this.setState(function () {
          return { count: count };
        });
        console.log('Got count from local storage.');
      } else {
        console.log('Count is not a number for some reason');
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        var json = JSON.stringify(this.state.count);
        localStorage.setItem('count', json);
        console.log('Saving count.');
      }
    }
  }, {
    key: 'onIncrement',
    value: function onIncrement() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'onDecrement',
    value: function onDecrement() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'onReset',
    value: function onReset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
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
          this.state.title,
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.onIncrement },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.onDecrement },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.onReset },
          'Reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
