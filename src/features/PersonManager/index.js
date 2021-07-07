import { Spin } from "antd";
import MainPage from "features/PersonManager/pages/MainPage";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";

PersonManager.propTypes = {};

function PersonManager(props) {
  const match = useRouteMatch();
  const { url } = match;

  const { isLoading } = useSelector((state) => state.personManager);

  return (
    <Spin spinning={isLoading}>
      <div>
        <Switch>
          <Route exact path={url} component={MainPage} />
        </Switch>
      </div>
    </Spin>
  );
}

export default PersonManager;
