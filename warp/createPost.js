import { warp, configureWallet } from "./configureWarpServer.js";
import { transactionId } from "../transactionid.js";
import { v4 as uuid } from "uuid";

//the file for creating new post/ interacting createPost fn in our contract
//sim to the read.js(to read the current state), 
async function createPost() {
  let wallet = await configureWallet();
  const contract = warp.contract(transactionId).connect(wallet);
  await contract.writeInteraction({
    function: "createPost",
    post: {
      title: "Hi from first post!",
      content: "This is my first post!",
      id: uuid(),
    },
  });
}

createPost();
