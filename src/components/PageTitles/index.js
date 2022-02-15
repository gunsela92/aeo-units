import React from "react";
import PropTypes from "prop-types";
import "./pageTitles.scss";

const PageTitles = ({title}) => {
  return (
    <h3 className="pageTitle">
      {title}
    </h3>
  );
};

PageTitles.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitles;
