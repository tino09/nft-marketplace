import { ethers } from "ethers";
import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";

import Web3Modal from "web3modal";
import {create as ipfsHttpClient} from "ipfs-http-client";


const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0")

    import {
    nftaddress, nftmarketaddress
  } from '../config'
  
  import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
  import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

  export default function MyAssets(){
      const [nfts, setNfts] = useState([])
      const [loadingState, setLoadingState] = useState("not-loading")
      useEffect(() => {
          loadNfts()
      }, [])

      async function loadNfts(){
        const provider = new ethers.providers.JsonRpcProvider()
        const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
        const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
        const data = await marketContract.fetchMarketItems()
    
        const items = await Promise.all(data.map(async i =>{
          const tokenUri = await tokenContract.tokenURI(i.tokenId)
          const meta = await axios.get(tokenUri)
          let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
          let item = {
            price,
            itemId: i.itemId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description
    
          }
          return item
        }))
        setNfts(items)
        setLoadingState('loaded')
    
        }

        if (loadingState === "loaded" && !nfts.length) return (
        <h1 className="py-10 px-20 text-3xl">No Assets Owned</h1>)

        return(
            <div className="flex justify-center">
                <div className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {
                    nfts.map((nft, i) =>(
                        <div key={i} className="border shadow  rounded-xl overflow-hidden">
                            <img src={nft.image} className="rounded" />
                            <div className="p-4 bg-black">
                                <p className="text-2xl font-bold text-white">Price - {nft.price} ETH</p>
                            </div>
                        </div>
                    ))
                }
                
                </div>
                
                </div>

            </div>
        )
  }
  