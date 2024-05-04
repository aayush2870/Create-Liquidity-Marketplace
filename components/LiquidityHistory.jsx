import React, { useState, useEffect } from "react";

//INTERNAL IMPORT
import { shortenAddress } from "../Utils/index";


const LiquidityHistory = ({ GET_ALL_LIQUIDITY }) => {

  const [liquidity, setLiquidity] = useState([]);

  useEffect(() => {
    try {
      GET_ALL_LIQUIDITY().then((item) => {
        setLiquidity(item?.reverse());

      });


    } catch (error) {
      console.log("please reload the browser");
    }
  }, []);
  return <section>

    <div className="container">
      <div className="row medium-padding120">
        <div className="col-lg-12 col-md-12
col-sm-12 col-xs-12">
          <div
            className="mCustomScrollbar
scrollable-responsive-table"
            data-mcs-theme="dark"
          >
            <table
              className="pricing-table-wrap-table-blurring">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Token A</th>
                  <th>Token B</th>
                  <th>Address A</th>
                  <th>Address B</th>
                  <th>poolAddress</th>
                  <th>Created</th>
                  <th>Transaction Hash</th>
                </tr>
              </thead>

              <tbody>
                {[1]?.map((liqudity, index) => (
                  <tr
                    key={index + 1}
                    className="crumina-module
crumina-pricing-table
pricing-table--style-table-blu
rring c-brown"
                  >

                    <td >
                      <div className="pricing-thumb">
                        <img
                          src={
                            liqudity?.network === "80001"
                              ? "img/80001.png" // Fixed spacing error in filename
                              : liqudity?.network === "157"
                                ? "img/157.png" // Provided valid image source for network 157
                                : liqudity?.network === "1"
                                  ? "img/1.png" // Corrected to match exact condition and assignment
                                  : liqudity?.network === "5"
                                    ? "img/1.png" // Consistent with network 1
                                    : liqudity?.network === "11155111"
                                      ? "img/1.png" // Correct condition check with triple equals
                                      : "img/logo-primary.png" // Default if none of the above match
                          }
                          alt=" "

                        />
                        <h6 className="pricing-title">{liquidity?.tokenA}
                          <span>
                            {liqudity?.network === "80001"
                              ? "Mumbai" // Fixed spacing error in filename
                              : liqudity?.network === "157"
                                ? "Polygon" // Provided valid image source for network 157
                                : liqudity?.network === "1"
                                  ? "Ethereum" // Corrected to match exact condition and assignment
                                  : liqudity?.network === "5"
                                    ? "Georila" // Consistent with network 1
                                    : liqudity?.network === "11155111"
                                      ? "Sepolia" // Correct condition check with triple equals
                                      : "Woox"}// Default if none of the above match

                          </span>
                        </h6>
                      </div>
                    </td>
                    <td>

                      <div className="currency-details-item">
                        <div className="value">{liquidity?.tokenB}</div>
                      </div>








                    </td>
                    <td>
                      <div className="currency-details-item">
                        <div onClick={() =>
                          navigator.clipboard.writeText(
                            liquidity?.tokenA_Address
                          )

}

    className={`value  ${
    index % 2 === 0 ? "c-green-success":"c-red-light"
  }`}
  

  >
                        {shortenAddress(liquidity?.tokenB_Address)}

                      </div>


                    </div>


                  </td>
</tr>
))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section >;
};

export default LiquidityHistory;
