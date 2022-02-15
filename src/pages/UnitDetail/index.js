import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./unitDetails.scss";
import {setUnits} from "../../redux/actions/unitActions";
import PageTitles from "../../components/PageTitles";

const UnitDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const units = useSelector(state => state.units?.units);
  const foundUnit = units?.find(unit => unit?.id === parseInt(params?.id)) || {};

  useEffect(() => {
    if (units?.length === 0) {
      dispatch(setUnits());
    }
  }, [units]);

  return (
    <>
      <PageTitles title={"Unit Detail Page"} />
      <div className="unitDetailsWrapper">
        <div>ID : </div>
        <div>{foundUnit?.id}</div>
        <div>Name : </div>
        <div>{foundUnit?.name}</div>
        <div>Description : </div>
        <div>{foundUnit?.description}</div>
        <div>Min. Required Age:</div>
        <div>{foundUnit?.age}</div>
        <div>Wood Cost:</div>
        <div>{foundUnit?.cost?.Wood || "-"}</div>
        <div>Food Cost:</div>
        <div>{foundUnit?.cost?.Food || "-"}</div>
        <div>Gold Cost:</div>
        <div>{foundUnit?.cost?.Gold || "-"}</div>
        <div>Build Time:</div>
        <div>{foundUnit?.build_time || 0}</div>
        <div>Reload Time:</div>
        <div>{foundUnit?.reload_time || 0}</div>
        <div>Hit Points:</div>
        <div>{foundUnit?.hit_points || 0}</div>
        <div>Attack:</div>
        <div>{foundUnit?.attack || 0}</div>
        <div>Accuracy:</div>
        <div>{foundUnit?.accuracy || 0}</div>
      </div>
    </>
  );
};

export default UnitDetail;
