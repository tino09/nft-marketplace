import { ethers } from "ethers";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import {Web3Modal} from "web3modal";
import {create as ipfsHttpClient} from "ipfs-http-client";


const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0")