var React = require("react");
var ReactDOM = require("react-dom");
var Route = require("react-router").Route;
var Router = require("react-router").Router;
var IndexRoute = require("react-router").IndexRoute;
var browserHistory = require("react-router").browserHistory;

var App = require("./components/app");
var Home = require("./components/home/home.jsx");

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
	</Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
		<Router history={browserHistory}>{routes}</Router>,
    document.getElementById("root")
	);
});
