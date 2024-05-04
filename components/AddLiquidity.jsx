import React , {useState,useEffect} from  "react";
import {Input} from "./index";


const AddLiquidity = ( {CREATE_LIQUIDITY, setOpenAllLiquidity }) => {

const [poolHistory, setPoolHistory] = useState([]);
const [selectedPool, setSelectedPool] = useState();
const [liqudityAmount, setLiqudityAmount] = useState();
const [approveAmount, setApproveAmount] = useState();
useEffect(() => {
const pools = JSON.parse(localStorage.getItem("poolHistory")); 
setPoolHistory(pools);
}, []);

return ( <section>
  <div className="container"> <div className="row pt80"> <div className="new_addpool mb30"> <div className="register-form form--dark">
  <header className="crumina-module crumina-heading heading--h2
  heading--with-decoration">
  <h2 className="heading-title">Add Pool</h2> &nbsp; &nbsp; &nbsp;{" "} <span onClick={() => setOpenAllLiquidity (false)}>X</span>
  </header>
  
<div className="form-group label-floating is-empty">
<select
onChange={(e) => {
const selected = poolHistory?. 
find(
(x, index) => index + 1 == e. target.value
);
}} >


  <option ></option>

</select>
 </div>
  </div>
  </div>
  </div>
  </div>
  </section>
  
)};
export default AddLiquidity;
