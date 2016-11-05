"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var markedString = marked('# Marked in browser\n\nRendered by **marked**.');
//
// $(document).ready(function(){
//   $("#content").html(markedString);
// });

var DisplayContainer = function (_React$Component) {
  _inherits(DisplayContainer, _React$Component);

  function DisplayContainer() {
    _classCallCheck(this, DisplayContainer);

    var _this = _possibleConstructorReturn(this, (DisplayContainer.__proto__ || Object.getPrototypeOf(DisplayContainer)).call(this));

    _this.state = { value: '' };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(DisplayContainer, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      // const placeHolder = ''
      var value = this.state.value;
      var markedString = marked(value);

      return React.createElement(
        "div",
        { className: "center-block text-center", id: "preview-body" },
        React.createElement(
          "h1",
          null,
          "Markdown Previewer"
        ),
        React.createElement(
          "div",
          { className: "col-xs-6" },
          React.createElement(
            "div",
            { className: "panel panel-default", id: "edit-block" },
            React.createElement(
              "div",
              { className: "panel-heading text-left" },
              "Edit file"
            ),
            React.createElement(
              "div",
              { className: "panel-body" },
              React.createElement(
                "textarea",
                { id: "edit-content", autofocus: true, value: this.state.value, onChange: this.handleChange },
                "# Simon-Game"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "col-xs-6" },
          React.createElement(
            "div",
            { className: "panel panel-info", id: "preview-block" },
            React.createElement(
              "div",
              { className: "panel-heading text-left" },
              React.createElement("i", { className: "fa fa-eye" }),
              " Preview changes"
            ),
            React.createElement(
              "div",
              { className: "panel-body" },
              React.createElement("textarea", { id: "preview-content", value: markedString })
            )
          )
        )
      );
    }
  }]);

  return DisplayContainer;
}(React.Component);

ReactDOM.render(React.createElement(DisplayContainer, null), document.getElementById('display-container'));

//
// This is a **JavaScript & Sass** project for [Free Code Camp challenge](https://www.freecodecamp.com/challenges/build-a-simon-game). Also applied **normalize.css，Bourbon Mixins， HTML5 animations**.
//
// You can [view the site here](http://codepen.io/AsimoLoveGym/full/zKXYKk/)
//
// ## Game Rules:
//
// It’s the classical Simon game. It will demo the pattern first, you follow the patter and click each block. Successfully doing so will lead you to next level.
//
// ###Game difficulty
// Default game difficulty is Hard (20 steps in total to win the game). You can use the dropdown menu to choose other difficulties (9 steps or 15 steps).
//
// ###Game mode
// In normal mode, you will stay in the same level if you clicked wrong.
//
// In strick mode, you will go back to level 0 if you clicked wrong.
//
// ###Others
//
// Switch on/off works as the real switch in life.
//
// Start button can reset game to level 0 and start from beginning.
//
// Tempo will speed up after level 5, 9 and 13.
//
// ## Reference:
//
// Mainly inspired by (just reverse engineering, never looked into the code)
// https://codepen.io/Em-Ant/full/QbRyqq/
//
// Clear All timeout, inspired by stackoverflow questions
// http://stackoverflow.com/questions/3847121/how-can-i-disable-all-settimeout-events
//
// Bourbon.sass for cross browsers compatibility
// https://github.com/thoughtbot/bourbon