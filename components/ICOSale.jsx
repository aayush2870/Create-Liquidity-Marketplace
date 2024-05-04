import React, { useState } from "react";
import { Input } from "./index";

const ICOSale = ({tokenSale, nativeToken,
buyToken }) => {
const [tokenQuantity, setTokenQuantity] = useState ();
const precentage =
'${tokenSale?.tokenSold / tokenSale?.tokenSaleBalance}'* 100;


return <section 
id="tokenBuy"
className="medium-padding120 responsive-align-center">
 <div className="container" id="buyWoox">
    <div className="row bg-2">
      <div className="col-lg-6 col-md-12 col-sm-12 col-sm-12 col-xs-12 mb30"> 
      <header className="crumina-module crumina-heading heading--h2
heading--with-decoration">
<img src="img/dots.png" className="responsive-dots mb-30"/>

<h2 className="heading-title
weight-normal">
Hurry to invest
<span
className="weight-bold"> in Cryptocurrency </span>
</h2>
<div className="heading-text">
  Lorem ipsum dolor sit amet consectetur adipi
  sicing elit. Eius temporibus atque, sit ex asperiores
   repellendus 
</div>

</header>
<p>Lorem ipsum, dolor sit amet consectetur
   adipisicing elit. Suscipit id eaque corporis ad iusto incidunt, enim a
  speriores minus culpa dolores repellendus quis
   sit repellat similique rerum, accusamus deserunt optio ipsam.
   adipisicing elit. Suscipit id eaque corporis ad iusto incidunt, enim a
  speriores minus culpa dolores repellendus quis
   sit repellat similique rerum, accusamus deserunt optio ipsam.
   </p>

<div className="crumina-module
crumina-counter-item counter-icon-left
mt60">
<svg className="woox-icon">
<use xlinkHref="#icon-group"></use>
</svg>
<div className="counter-content"> <div className="counter-number
counter">
<span>{nativeToken?.
tokenTotalSupply}</span>
<div className="units">+</div>
</div>
<h4 className="counter-title">
  {nativeToken?.tokenSymbol}
</h4>




</div>

</div>

      </div>
      <div className="col-lg-6 col-md-12 col-lg-offset-0 col-sm-12 col-xs-12">

        <div className="widget w-distribution-ends countdown-bg1">

          <h5 className="title"> Woox tokesn for sale </h5>

          <div className="new_center_img mt 30">
            <img src="img/nopool.png" 
            className="responsive-width-50" alt="" 
            />
          </div>
          <Input placeholder={"token quantity "} 
          handleClick={(e) => setTokenQuantity (e.target.value)}/>

          <a onClick={ ()=>buyToken (tokenQuantity)}
          className="btn btn--large btn--green-light"
          >  Buy Woox Tokens
          </a>
          <div className="crumina-mnodule crumina-skills-item skills-items-bordered">
            <div className="skills-item-info">
              <span className="skills-item-title"> {tokenSale?.tokenSold} 
              
              
              <span className="skills-item-count c-primary">
                <span
                className="count-animate">
                </span>
                <span className="units">
                  Balance:{nativeToken?. tokenBalance}
                </span>
              </span>
              </span>


            </div>

            <div className="skills-item-meter">
              <span className="skills-item-meter-active bg-primary-color" style={{width:'${ percentage}%'}}></span>
            </div>
            <span className="add-info">
              <span className="c-link-color">
                Market  Cap:
                 </span>
                 {tokenSale?.tokenPrice *
                 tokenSale?.tokenSaleBalance}
            </span>
<span className="c-link-color"> Matic
</span>
             <div className="price-wrap">

              <div className="token-price">
                Token  Price:
                <div className="price-value">
                  {tokenSale?.tokenPrice}
                </div>
              </div>
               <div className="token-total"> Total{nativeToken?.tokenSymbol}
               Tokens:
               <div className="price-value">
                {
                  tokenSale?.tokenSaleBalance
                }
               </div>
               
               
               </div>
             </div>
          </div >
        </div>

      </div>
    </div>
 </div>
 
 
 
 </section>;
};
export default ICOSale;