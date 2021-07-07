import React from "react";
import PropTypes from "prop-types";
import PersonTable from "features/PersonManager/components/PersonTable";

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div>
      <PersonTable />
    </div>
  );
}

export default MainPage;
