import { Layout } from "antd";
import { fetchNameRoles, setLogin } from "app/globalSlice";
import Home from "features/Home";
import Login from "features/Login";
import AdminLayout from "layout/AdminLayout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [isFetch, setFetch] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem("token");

      if (token) await dispatch(fetchNameRoles());

      setFetch(true);
    };

    checkLogin();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {isFetch && (
          <Switch>
            <Route path="/admin" component={AdminLayout} />
            <Route path="/login" component={Login} />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
