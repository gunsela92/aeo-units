import React, {useState} from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./unitFiltering.scss";
import PropTypes from "prop-types";
import UnitResults from "../UnitResults";

const UnitFiltering = ({unitList}) => {
  const [selectedTypes, setSelectedTypes] = useState({food: false, wood: false, gold: false});
  const [sliderValues, setSliderValues] = useState({food: [0, 200], wood: [0, 200], gold: [0, 200]});

  const handleChange = (type, value) => {
    setSliderValues({...sliderValues, [type]: value});
  };

  const handleCheckboxChange = (type) => {
    if (selectedTypes[type]) {
      setSliderValues({...sliderValues, [type]: 0})
    }
    setSelectedTypes({...selectedTypes, [type]: !selectedTypes[type]});
  };

  const filterUnits = () => {
    const filteredUnits = unitList.filter(unit => {
      if (selectedTypes.food && unit?.cost?.Food < sliderValues.food[0] || unit?.cost?.Food > sliderValues.food[1]) {
        return false;
      }
      if (selectedTypes.wood && unit?.cost?.Wood < sliderValues.wood[0] || unit?.cost?.Wood > sliderValues.wood[1]) {
        return false;
      }
      if (selectedTypes.gold && unit?.cost?.Gold < sliderValues.gold[0] || unit?.cost?.Gold > sliderValues.gold[1]) {
        return false;
      }
      return true;
    });
    return filteredUnits;
  };

  return (
    <div className="sliderWrapper">
      <div className="costsTitle">Costs</div>
      <div className="sliderItem">
        <input className="typeSelector" type="checkbox" checked={selectedTypes.wood}
          onChange={() => handleCheckboxChange("wood")}/>
        <span>Wood</span>
        <Range
          disabled={!selectedTypes.wood}
          className="filterSlider"
          min={0}
          max={200}
          defaultValue={[0, 200]}
          allowCross={false}
          onAfterChange={(e) => handleChange("wood", e)}
        />
        <span className="sliderValues">{sliderValues.wood[0]} - {sliderValues.wood[1]}</span>
      </div>
      <div className="sliderItem">
        <input className="typeSelector" type="checkbox" checked={selectedTypes.food}
          onChange={() => handleCheckboxChange("food")}/>
        <span>Food</span>
        <Range
          disabled={!selectedTypes.food}
          className="filterSlider"
          min={0}
          max={200}
          defaultValue={[0, 200]}
          allowCross={false}
          onAfterChange={(e) => handleChange("food", e)}
        />
        <span className="sliderValues">{sliderValues.food[0]} - {sliderValues.food[1]}</span>
      </div>
      <div className="sliderItem">
        <input className="typeSelector" type="checkbox" checked={selectedTypes.gold}
          onChange={() => handleCheckboxChange("gold")}/>
        <span>Gold</span>
        <Range
          disabled={!selectedTypes.gold}
          className="filterSlider"
          min={0}
          max={200}
          defaultValue={[0, 200]}
          allowCross={false}
          onAfterChange={(e) => handleChange("gold", e)}
        />
        <span className="sliderValues">{sliderValues.gold[0]} - {sliderValues.gold[1]}</span>
      </div>
      <UnitResults results={filterUnits()}/>
    </div>
  );
};

UnitFiltering.propTypes = {
  unitList: PropTypes.array.isRequired
};

export default UnitFiltering;
