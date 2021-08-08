import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import VideoCategoryPage from "./pages/MainPage/VideoCategoryPage";

Video.propTypes = {};

function Video(props) {
  const { url } = useRouteMatch();
  const { isLoading } = useSelector((state) => state.exam);

  return (
    <Spin spinning={isLoading}>
      <Switch>
        <Route exact path={url} component={MainPage} />
        <Route exact path={`${url}/categories`} component={VideoCategoryPage} />
      </Switch>
    </Spin>
  );
}

export default Video;
