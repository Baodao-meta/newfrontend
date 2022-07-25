import { useState } from 'react'
import fs from 'fs'
import { NFTStorage } from "nft.storage/dist/bundle.esm.min.js";
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useHistory } from 'react-router-dom'
import Web3Modal from 'web3modal'
import NFTMarketplace from '../components/artifacts/NFTMarketplace.json'
// import { Button, Divider, Row,Col, Input,  Upload  } from 'antd';
import ImgCrop from 'antd-img-crop';

// // import { nftAddress } from '../../config'

// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

// // import {
// //   marketplaceAddress
// // } from '../config'
const NftAddress = process.env.REACT_APP_NFTADDRESS
// const MarketplaceAddress = process.env.REACT_APP_NFTMARKETADDRESS
// console.log({NftAddress,MarketplaceAddress})

export default function CreateItem() {
  const [fileList, setFileList] = useState()
  // const [fileUrl, setFileUrl] = useState(null)
//   const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
//   const router = useHistory()

//   async function onChange(e) {
//     const file = e.target.files[0]
//     try {
//       const added = await client.add(
//         file,
//         {
//           progress: (prog) => console.log(`received: ${prog}`)
//         }
//       )
//       const url = `https://ipfs.infura.io/ipfs/${added.path}`
//       setFileUrl(url)
//     } catch (error) {
//       console.log('Error uploading file: ', error)
//     }  
//   }
//   async function uploadToIPFS() {
//     const { name, description, price } = formInput
//     if (!name || !description || !price || !fileUrl) return
//     /* first, upload to IPFS */
//     const data = JSON.stringify({
//       name, description, image: fileUrl
//     })
//     try {
//       const added = await client.add(data)
//       const url = `https://ipfs.infura.io/ipfs/${added.path}`
//       /* after file is uploaded to IPFS, return the URL to use it in the transaction */
//       return url
//     } catch (error) {
//       console.log('Error uploading file: ', error)
//     }  
//   }

//   async function listNFTForSale() {
//     const url = await uploadToIPFS()
//     const web3Modal = new Web3Modal()
//     const connection = await web3Modal.connect()
//     const provider = new ethers.providers.Web3Provider(connection)
//     const signer = provider.getSigner()

//     /* next, create the item */
//      const price = ethers.utils.parseUnits(formInput.price * ("1e" + 18), 'matic')
//      let contract = new ethers.Contract(NftAddress, NFTMarketplace.abi, signer)
//      let listingPrice = await contract.getListingPrice()
//      listingPrice = listingPrice.toString()
//      let transaction = await contract.createToken(url, price, { value: listingPrice })
//      await transaction.wait()
   
//     // router.push('/')
//     router.push('/nftBalance')
//   }

//   return (
//     <div className="flex justify-center">
//       <div className="w-1/2 flex flex-col pb-12">
//         <input 
//           placeholder="Asset Name"
//           className="mt-8 border rounded p-4"
//           onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
//         />
//         <textarea
//           placeholder="Asset Description"
//           className="mt-2 border rounded p-4"
//           onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
//         />
//         <input
//           placeholder="Asset Price in Matic"
//           className="mt-2 border rounded p-4"
//           onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
//         />
//         <input
//           type="file"
//           name="Asset"
//           className="my-4"
//           onChange={onChange}
//         />
//         {
//           fileUrl && (
//             <img className="rounded mt-4" width="350" src={fileUrl} />
//           )
//         }
//         <button onClick={listNFTForSale} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
//           Create NFT
//         </button>
//       </div>
//     </div>
//   )
// }

const endpoint = 'https://api.nft.storage' // the default
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDAyZmY5RWQ2YzE0NDYyRjMwODRhZTY4YTU1ZUUwZjE2NTBGNGZjYzEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NjM4NDcwMTc0MiwibmFtZSI6ImV4YW1wbGUifQ.Z9lPdfO03dvdnBRM0znpmRXQTGXnb2KZWIcVv0DED3s' // your API key from https://nft.storage/manage

async function main(file) {
  const storage = new NFTStorage({ endpoint, token })
  const data = await fs.promises.readFile(file)
  const cid = await storage.storeBlob(new Blob([data]))
  console.log({ cid })
  const status = await storage.status(cid)
  console.log(status)
}

function Handlesubmit(){
  console.log(fileList)
  main(fileList)
}

function handleChange(e){
  console.log(e.target.files)
setFileList(e.target.files[0])
}  

return(
  <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"0 auto",textAlign:"center"}}>
    <header>
      <h1>

      Create Nft
      </h1>
      </header>
  {/* <Row justify='center'>
  <Input style={{width:"100%"}} placeholder='Asset Name'/>
  </Row>
  <Divider/>
  <TextArea rows={2} placeholder='Asset Description'/>
  <Divider/>
  <input type="file" onChange={handleChange}/>
  <Divider/>
  <Button onClick={Handlesubmit} type="primary">Submit</Button> */}
  <label htmlFor="">
    Asset Name : 
  </label>
  <input type="text"  style={{width:"500px",margin:"10px auto"}}/>
  <label htmlFor="">
    Asset Description:
  </label>
  <textarea name="" id="" cols="10" rows="10" style={{width:"500px",margin:"10px auto"}}></textarea>
  <label htmlFor="">
    Upload:
  </label>
  <input type="file" onChange={handleChange}/>
  <button style={{width:"250px",margin:"10px auto"}} onClick={Handlesubmit}>Submit</button>
  </div>
)
    }







