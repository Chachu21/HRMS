import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  approved,
  rejected,
} from "../../../redux/reducers/loginReducer";

const ManageAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const approve = useSelector((state) => state.manageAccount.approved);
  const reject = useSelector(
    (state) => state.manageAccount.rejected );

  return <div></div>;
};

export default ManageAccount;
