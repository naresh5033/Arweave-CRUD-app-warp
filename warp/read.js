import { warp, configureWallet } from "./configureWarpServer.js";
import { transactionId } from "../transactionid.js";

//in this file we can read the fns from our SC
async function read() {
  let wallet = await configureWallet();
  //the txId we got from deploy 
  const contract = warp.contract(transactionId).connect(wallet);
  const { cachedValue } = await contract.readState(); //the current state

  console.log("state: ", JSON.stringify(cachedValue));
}
read();
