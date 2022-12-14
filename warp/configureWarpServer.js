import { WarpFactory } from "warp-contracts";
import fs from "fs";

//this is the warp sdk to interact with the contracts
//with this set up we can now deploy our SCs
/*
 *  environment can be 'local' | 'testnet' | 'mainnet' | 'custom';
 */

const environment = process.env.WARPENV || "testnet";
let warp; //initially set to null

if (environment === "testnet") {
  warp = WarpFactory.forTestnet();
} else if (environment === "mainnet") {
  warp = WarpFactory.forMainnet();
} else {
  throw Error("environment not set properly...");
}

//the fn for configuring our wallet
async function configureWallet() {
  try {
    if (environment === "testnet") {
      try {
        //if there's file avaiable just return the parsed json of that file
        return JSON.parse(fs.readFileSync("../testwallet.json", "utf-8"));
      } catch (err) {
        //else gen a new file, using warp fn, that'll gen a wallet
        const { jwk } = await warp.generateWallet();
    
        fs.writeFileSync("../testwallet.json", JSON.stringify(jwk));
        return jwk; //return the generated wallet
      }
      //lly for the mainnet
    } else if (environment === "mainnet") {
      return JSON.parse(fs.readFileSync("../wallet.json", "utf-8"));
    } else {
      throw Error("Wallet not configured properly...");
    }
  } catch (err) {
    throw Error("Wallet not configured properly...", err);
  }
}

export { configureWallet, warp };
