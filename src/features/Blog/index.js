import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import NotFoundPage from "components/NotFoundPage";

Blog.propTypes = {};

function Blog(props) {
  const { url } = useRouteMatch();
  const { isLoading } = useSelector((state) => state.blog);

  return (
    <Spin spinning={isLoading}>
      <Switch>
        <Route exact path={url} component={MainPage} />
      </Switch>
    </Spin>
  );
}

export default Blog;
