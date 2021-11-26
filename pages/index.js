import { ethers } from "ethers"
import { useState, useEffect } from "react"
import axios from "axios"
import web3modal from 'web3modal'

import {nftaddress, nftmarketaddress} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import NFTMarket from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

export default function Home() {
  const {nfts, setnfts} = useState([]);
  const {loadingState, setLoadingState} = useState('not-loaded')
  return (
    <div >
      <h1>Home</h1>
    </div>
  )
}
