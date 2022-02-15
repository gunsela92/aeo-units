import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUnits} from "../../redux/actions/unitActions";
import Tabs from "../../components/Tabs";
import UnitFiltering from "../../components/UnitFiltering";

const UnitsPage = () => {
  const dispatch = useDispatch();
  const unitList = useSelector(state => state?.units?.units);
  const [searchValue, setSearchValue] = useState("all");
  const [filteredUnits, setFilteredUnits] = useState([]);

  useEffect(() => {
    dispatch(setUnits());
  }, []);

  const filterUnits = () => {
    if (searchValue === "all") {
      setFilteredUnits(unitList);
    } else {
      setFilteredUnits(unitList?.filter(unit => unit?.age?.toLowerCase()?.includes(searchValue.toLowerCase())));
    }
  };

  useEffect(() => {
    if (Array.isArray(unitList) && unitList?.length > 0) {
      filterUnits(searchValue);
    }
  }, [searchValue, unitList]);

  return (
    <>
      {unitList?.length > 0 && (
        <Tabs units={unitList} onSelect={(val) => setSearchValue(val)} selectedTab={searchValue}/>
      )}
      <UnitFiltering unitList={filteredUnits}/>
    </>
  );
};

export default UnitsPage;
