import React, { useState, useContext } from "react";
//INTERNAL IMPORT
import {
  Header,
  Footer,
  Hero,
  ICOTokens,
  LiquidityHistory,
  ICOSale,
  Access,
  Analytic,
  App,
  AddLiquidity,
  AddPool,
  SuccessPool,
  NoPool,
  Loader,
  Input,
  PoolInput,
  HeaderICON,
  FooterICON,
} from "../components/index";
import { CONTEXT_Provider } from "../context/index"
const index = () => {
  const { 
    connect,
    GET_POOL_ADDRESS,
    LOAD_TOKEN,
    notifyError,
    notifySuccess,
    CREATE_LIQUIDITY,
    GET_ALL_LIQUIDITY,
    transferNativeToken,
    buyToken,
    tokenSale,
    nativeToken,
    address,
    loader,
    DAPP_NAME,

  } = useContext(CONTEXT_Provider);
  //MODEL STATE
  const [openADDpool, setOpenAddPool] = useState(false);
  const [openALLLiquidity, setOpenAllLiquidity] = useState(false);

  return <div className="curmina-grid">
    <Header
      setOpenAddpool={setOpenAddPool}
      setopenAllLiquidity={setOpenAllLiquidity}
      Connect={connect}
      address={address}
    />
    <div className="main-content-wrapper">
      <Hero transferNativeToken=
        {transferNativeToken} />
      <ICOTokens />
      <LiquidityHistory GET_ALL_LIQUIDITY=
        {GET_ALL_LIQUIDITY} />
      <APP />
      <Analytic />
      <Access />
      <ICOSale
        tokenSale={tokenSale}
        nativeToken={nativeToken}
        buyToken={buyToken}
      />
    </div>
    {openADDpool && (
      <div className="new_center">
        <AddPool setOpenAddPool={setOpenAddpool}
          LOAD_TOKEN={LOAD_TOKEN}
          notifyError={notifyError}
          notifySuccess={notifySuccess}
          GET_POOL_ADDRESS={GET_POOL_ADDRESS}

        />
      </div>
    )}
    {openAllLiquidity && (
      <div className="new_center">
        <AddLiquidity
          CREATE_LIQUIDITY={CREATE_LIQUIDITY}
          setOpenAllLiquidity=
          {setOpenAllLiquidity}
        />
      </div>
    )}

    {Loader && (
      <div className="new_center">
        <Loader />


      </div>
    )}
    <Footer />
  </div>;
};

export default index;
