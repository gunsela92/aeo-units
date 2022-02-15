import React from "react";
import PropTypes from "prop-types";
import "./tabs.scss";

const Tabs = ({units, onSelect, selectedTab}) => {
  const unitSet = units?.filter((value, index, self) =>
    index === self?.findIndex((unit) => (
      unit?.age === value?.age
    )));

  const handleAgeFilter = (age) => {
    onSelect(age);
  }

  return (
    <div className="tabsWrapper">
      <div className={`tabsItem${selectedTab === "all" ? " selectedTab" : ""}`} onClick={() => handleAgeFilter("all")}>All</div>
      {unitSet?.map(unit => (
        <div key={unit?.id} className={`tabsItem${selectedTab === unit?.age ? " selectedTab" : ""}`} onClick={() => handleAgeFilter(unit?.age)}>
          {unit?.age}
        </div>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  units: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
}

Tabs.defaultProps = {
  units: [],
};

export default Tabs;
