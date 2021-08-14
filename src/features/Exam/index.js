import { Spin } from "antd";
import NotFoundPage from "components/NotFoundPage";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/MainPage";

Exam.propTypes = {};

function Exam(props) {
	const { url } = useRouteMatch();
	const { isLoading } = useSelector((state) => state.exam);

	return (
		<Spin spinning={isLoading}>
			<Switch>
				<Route exact path={url} component={MainPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</Spin>
	);
}

export default Exam;
