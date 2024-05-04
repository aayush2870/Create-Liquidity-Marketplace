import React, { useState } from "react";
import PropTypes from "prop-types"; // Ensure PropTypes is imported
import { PoolInput, SuccessPool, NoPool } from "./index"; // Correct import statement

const AddPool = ({
  setOpenAddPool,
  LOAD_TOKEN,
  notifyError,
  notifySuccess,
  GET_POOL_ADDRESS,
}) => {
  const [poolAddress, setPoolAddress] = useState(""); // Correct initialization
  const zeroAddress = "0x0000000000000000000000000000000000000000"; // Corrected zero address

  return (
    <section>
      <div className="container">
        <div className="row pt80">
          <div className="New_addpool mb30">
            <div className="register-form form--dark"> {/* Fixed class name typo */}
              <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                <h2 className="heading-title">Add Pool</h2> {/* Fixed class name */}
                &nbsp; &nbsp; &nbsp;
                <span onClick={() => setOpenAddPool(false)}>X</span> {/* Corrected JSX */}
              </header>

              {/* Conditional rendering based on pool address */}
              {poolAddress === zeroAddress ? ( // Corrected condition
                <NoPool />
              ) : poolAddress ? ( // Corrected JSX structure and conditions
                <SuccessPool poolAddress={poolAddress} /> // Corrected variable name
              ) : (
                <PoolInput
                  notifyError={notifyError}
                  notifySuccess={notifySuccess}
                  LOAD_TOKEN={LOAD_TOKEN}
                  GET_POOL_ADDRESS={GET_POOL_ADDRESS}
                  setPoolAddress={setPoolAddress} // Corrected variable name and prop
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AddPool.propTypes = {
  setOpenAddPool: PropTypes.func.isRequired,
  LOAD_TOKEN: PropTypes.func.isRequired,
  notifyError: PropTypes.func.isRequired,
  notifySuccess: PropTypes.func.isRequired,
  GET_POOL_ADDRESS: PropTypes.func.isRequired,
};

export default AddPool;
