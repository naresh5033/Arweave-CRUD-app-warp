import fs from "fs";
import { configureWallet, warp } from "./configureWarpServer.js";

async function deploy() {
  const wallet = await configureWallet();
  const state = fs.readFileSync("state.json", "utf-8");
  const contractsource = fs.readFileSync("contract.js", "utf-8");

//this warp fn will deploy our contract, and this will return txId
  const { contractTxId } = await warp.createContract.deploy({
    wallet,
    initState: state,
    src: contractsource,
  });

  //then write our txId var in a newfile
  fs.writeFileSync(
    "../transactionid.js",
    `export const transactionId = "${contractTxId}"`
  );
//connect the tx to the wallet
  const contract = warp.contract(contractTxId).connect(wallet);

  //now write to our initialize fn to the contract
  await contract.writeInteraction({
    function: "initialize", //this will set the caller as author
  });
  const { cachedValue } = await contract.readState(); //will give us current state

  console.log("Contract state: ", cachedValue);
  console.log("contractTxId: ", contractTxId);
}
deploy();
