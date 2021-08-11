import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import MainPage from "./pages/MainPage";

Video.propTypes = {};

function Video(props) {
	const { url } = useRouteMatch();
	const { isLoading } = useSelector((state) => state.exam);

	return (
		<Spin spinning={isLoading}>
			<Switch>
				<Route exact path={url} component={MainPage} />
				<Route exact path={`${url}/categories`} component={CategoryPage} />
			</Switch>
		</Spin>
	);
}

export default Video;
