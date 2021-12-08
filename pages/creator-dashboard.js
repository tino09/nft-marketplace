import { ethers } from "ethers";
import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import {create as ipfsHttpClient} from "ipfs-http-client";

import {
    nftaddress, nftmarketaddress
  } from '../config'
  
  import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
  import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

  export default function CreatorDashboard (){
      const [nfts, setNfts] = useState([])
      const [sold, setSold] = useState([])
  }