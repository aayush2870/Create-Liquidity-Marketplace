import React, { useState, useEffect } from "react";

const PoolInput = ({
  notifyError,
  notifySuccess,
  LOAD_TOKEN,
  GET_POOL_ADDRESS,
  setPoolAddress,
}) => {
  const [token_1, setToken_1] = useState(null);
  const [token_2, setToken_2] = useState(null);
  const [fee, setFee] = useState("");
  const [token_A, setToken_A] = useState("");
  const [token_B, setToken_B] = useState("");

  useEffect(() => {
    const loadToken = async () => {
      if (!token_A) return;

      const token = await LOAD_TOKEN(token_A);
      if (!token) {
        notifyError("Please enter a valid token address.");
      } else {
        setToken_1(token);
      }
    };

    loadToken();
  }, [token_A]);

  useEffect(() => {
    const loadToken = async () => {
      if (!token_B) return;

      const token = await LOAD_TOKEN(token_B);
      if (!token) {
        notifyError("Please enter a valid token address.");
      } else {
        setToken_2(token);
      }
    };

    loadToken();
  }, [token_B]);

  const CALLING_POOL_Add = async () => {
    if (!token_1 || !token_2 || !fee) {
      notifyError("Please provide all required details.");
      return;
    }

    const pool = await GET_POOL_ADDRESS(token_1, token_2, fee);
    if (pool && pool.length > 0) {
      setPoolAddress(pool[0]);
    } else {
      notifyError("Unable to find the pool address.");
    }
  };

  return (
    <div>
      {token_1 ? (
        <input
          type="text"
          value={`Name: ${token_1?.name}, Symbol: ${token_1?.symbol}, Balance: ${token_1?.balance?.slice(0, 8)}`}
          readOnly
        />
      ) : (
        <input
          type="text"
          placeholder="Token A"
          onChange={(e) => setToken_A(e.target.value)}
        />
      )}

      {token_2 ? (
        <input
          type="text"
          value={`Name: ${token_2?.name}, Symbol: ${token_2?.symbol}, Balance: ${token_2?.balance?.slice(0, 8)}`}
          readOnly
        />
      ) : (
        <input
          type="text"
          placeholder="Token B"
          onChange={(e) => setToken_B(e.target.value)}
        />
      )}

      <input
        type="number"
        placeholder="Fee"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
      />

      <button onClick={CALLING_POOL_Add}>Get Pool Address</button>
    </div>
  );
};

export default PoolInput;
