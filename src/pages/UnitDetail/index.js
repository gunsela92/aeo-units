import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const UnitDetail = () => {
  const params = useParams();
  const units = useSelector(state => state.units?.units);
  const foundUnit = units?.find(unit => unit?.id === parseInt(params?.id));

  return (
    <div>
      {foundUnit?.age}
    </div>
  );
};

export default UnitDetail;
