import { Spin } from "antd";
import NotFoundPage from "components/NotFoundPage";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ContentUpdatePage from "./pages/ContentUpdatePage";
import MainPage from "./pages/MainPage";

Blog.propTypes = {};

function Blog(props) {
  const { url } = useRouteMatch();
  const { isLoading } = useSelector((state) => state.blog);

  return (
    <Spin spinning={isLoading}>
      <Switch>
        <Route exact path={url} component={MainPage} />
        <Route
          path={`${url}/:blogId/update-content`}
          component={ContentUpdatePage}
        />
        <Route path={`${url}/categories`} component={CategoryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Spin>
  );
}

export default Blog;
