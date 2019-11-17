"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//stateless functional components


var Indecisionapp = function (_React$Component) {
    _inherits(Indecisionapp, _React$Component);

    function Indecisionapp(props) {
        _classCallCheck(this, Indecisionapp);

        var _this = _possibleConstructorReturn(this, (Indecisionapp.__proto__ || Object.getPrototypeOf(Indecisionapp)).call(this, props));

        _this.state = { options: [] };
        _this.handledeleteops = _this.handledeleteops.bind(_this);
        _this.handlepick = _this.handlepick.bind(_this);
        _this.handleaddoption = _this.handleaddoption.bind(_this);
        return _this;
    }

    _createClass(Indecisionapp, [{
        key: "handleaddoption",
        value: function handleaddoption(insert) {

            if (!insert) {
                return "Please enter a valid fruit";
            } else if (this.state.options.indexOf(insert) > -1) {
                return "this option already exists";
            }

            //if either of the above cases fire it stops the function. below can be equivalent to else close

            this.setState(function (prevState) {

                return { options: prevState.options.concat([insert]) };
            });
        }
    }, {
        key: "handlepick",
        value: function handlepick() {
            var _this2 = this;

            this.setState(function () {

                var rand = Math.floor(Math.random() * _this2.state.options.length);

                alert(_this2.state.options[rand]);
            });
        }

        //handledeleteoptions

    }, {
        key: "handledeleteops",
        value: function handledeleteops() {

            this.setState(function () {

                return { options: [] };
            });
        }
    }, {
        key: "render",
        value: function render() {

            var title = "Indecision";
            var subtitle = "Put your life in the hands of a computer";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasoptions: this.state.options.length > 0,
                    handlepick: this.handlepick
                }),
                React.createElement(Options, { options: this.state.options,
                    handledeleteops: this.handledeleteops
                }),
                React.createElement(Addoption, { handleaddoption: this.handleaddoption })
            );
        }
    }]);

    return Indecisionapp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            console.log(this.props);
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { disabled: !this.props.hasoptions, onClick: this.props.handlepick },
                    " What should i do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

// options - options compotent here
//setup options prop for component
//render the length of array

//render new p tag for each option(set text, set key)

//add remove all button
//set up remove alert message
//set up onclick to fire the message

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            //const option = this.props.options.map((opt)=>{return <p key={opt}>{opt}</p>})
            //  <Option option={option}/>

            console.log(this.props.options);
            return React.createElement(
                "div",
                null,
                " ",
                React.createElement(
                    "button",
                    { onClick: this.props.handledeleteops },
                    "Remove All"
                ),
                this.props.options.map(function (opt) {
                    return React.createElement(Option, { key: opt, optiontext: opt });
                })
            );
        }
    }]);

    return Options;
}(React.Component);
//Option -> option argument here

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                " ",
                this.props.optiontext
            );
        }
    }]);

    return Option;
}(React.Component);

//addoption - add option component here
//setup form
//wire up on submit
//handleaddoption fetch the value typed, if value alert

var Addoption = function (_React$Component6) {
    _inherits(Addoption, _React$Component6);

    function Addoption(props) {
        _classCallCheck(this, Addoption);

        var _this7 = _possibleConstructorReturn(this, (Addoption.__proto__ || Object.getPrototypeOf(Addoption)).call(this, props));

        _this7.handleaddoption = _this7.handleaddoption.bind(_this7);
        _this7.state = {

            error: undefined
        };

        return _this7;
    }

    _createClass(Addoption, [{
        key: "handleaddoption",
        value: function handleaddoption(e) {
            e.preventDefault();
            console.log("form submited");
            var insert = e.target.elements.insert.value.trim();
            var error = this.props.handleaddoption(insert);

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: "render",
        value: function render() {

            //remember that below this.state if false if undefined

            return React.createElement(
                "div",
                null,
                this.state.error && this.state.error,
                React.createElement(
                    "form",
                    { onSubmit: this.handleaddoption },
                    React.createElement("input", { type: "text", name: "insert" }),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    ),
                    " "
                )
            );
        }
    }]);

    return Addoption;
}(React.Component);

/*const jsx = ( <div>
    
    
    <Header/>
    <Action/>
    <Options/>
    <Addoption/>
    <Indecisionapp/>
    </div>
) */

ReactDOM.render(React.createElement(Indecisionapp, null), document.getElementById('app'));
