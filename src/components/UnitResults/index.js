import React from "react";
import "./unitResults.scss";
import PropTypes from "prop-types";

const UnitResults = ({ results }) => {
  return (
    <div className="unitResults">
      <div className="unitResultsWrapper">
        <div className="unitResultsItem">
          id
        </div>
        <div className="unitResultsItem">
          name
        </div>
        <div className="unitResultsItem">
          age
        </div>
        <div className="unitResultsItem">
          costs
        </div>
      </div>
      {results?.map(item => (
        <div className="unitResultsWrapper" key={item?.id}>
          <div className="unitResultsItem">
            {item?.id}
          </div>
          <div className="unitResultsItem">
            {item?.name}
          </div>
          <div className="unitResultsItem">
            {item?.age}
          </div>
          <div className="unitResultsItem">
            {item?.cost && Object.keys(item?.cost).map((key, i) => (
              <span key={key}>
                {key}: {item?.cost[key]}
                {i !== Object.keys(item?.cost).length - 1 && <span>, </span>}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

UnitResults.propTypes = {
  results: PropTypes.array
};

UnitResults.defaultProps = {
  results: []
};

export default UnitResults;
