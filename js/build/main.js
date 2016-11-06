"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayContainer = function (_React$Component) {
  _inherits(DisplayContainer, _React$Component);

  function DisplayContainer() {
    _classCallCheck(this, DisplayContainer);

    var _this = _possibleConstructorReturn(this, (DisplayContainer.__proto__ || Object.getPrototypeOf(DisplayContainer)).call(this));

    _this.state = { value: '# Markdown-Previewer\n\nThis is a **ReactJS & ES6** project for [Free Code Camp challenge](https://www.freecodecamp.com/challenges/build-a-markdown-previewer). Also applied **Babel**.\n\nYou can [view the site here](http://codepen.io/AsimoLoveGym/full/YpPrZL//)\n\n## Reference:\n\nmarkedJS library\n\nhttps://cdnjs.com/libraries/marked\n\nhttps://github.com/chjj/marked\n\nInspired by Matt OTousa\n\nhttp://codepen.io/Tattomoosa/pen/KgZgxv\n\nand \n\nHerman Fassett\n\nhttps://codepen.io/FreeCodeCamp/full/JXrLLE/\n' };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.markDown = _this.markDown.bind(_this);
    return _this;
  }

  _createClass(DisplayContainer, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: "markDown",
    value: function markDown(value) {
      var markedString = marked(value);
      return { __html: markedString };
    }
  }, {
    key: "render",
    value: function render() {
      // const placeHolder = ''


      return React.createElement(
        "div",
        { className: "center-block", id: "preview-body" },
        React.createElement(
          "h1",
          { className: "text-center", id: "app-title" },
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
              React.createElement("textarea", { id: "edit-content", autoFocus: true, value: this.state.value, onChange: this.handleChange })
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
              React.createElement("div", { id: "preview-content", dangerouslySetInnerHTML: this.markDown(this.state.value) })
            )
          )
        )
      );
    }
  }]);

  return DisplayContainer;
}(React.Component);

ReactDOM.render(React.createElement(DisplayContainer, null), document.getElementById('display-container'));