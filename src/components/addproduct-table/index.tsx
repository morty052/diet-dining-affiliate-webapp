import { useState } from 'react'
import { Button } from '../ui/button'

interface IProduct {
  name: string
  image: string
  description: string
  price: number
}

type Props = {
  products?: IProduct[]
}

export function AddProductTable({ products }: Props) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    image: '',
    description: '',
    price: 0,
  })

  const [AddedProducts, setAddedproducts] = useState<[] | IProduct[]>([])

  const handleAddProduct = () => {
    console.log(newProduct)
    setAddedproducts((prev) => [...prev, newProduct])
    setNewProduct({
      name: '',
      image: '',
      description: '',
      price: 0,
    })
  }

  const handleTextChange = (name: any, text: string) => {
    setNewProduct((prev) => ({
      ...prev,
      [name]: text,
    }))
  }

  const handleFileChange = (e: any) => {
    console.log(e.target.files[0])
    setNewProduct((prev) => ({
      ...prev,
      image: URL.createObjectURL(e.target.files[0]),
    }))
  }

  // return (
  //   <div>
  //     <Table>
  //       <TableCaption>Add new product.</TableCaption>
  //       <TableHeader>
  //         <TableRow>
  //           <TableHead className=" text-white">Name</TableHead>
  //           <TableHead className=" text-white">Image</TableHead>
  //           <TableHead className=" text-white">Description</TableHead>
  //           <TableHead className=" text-white">Price</TableHead>
  //           <TableHead className=" text-white">Preview</TableHead>
  //         </TableRow>
  //       </TableHeader>
  //       <TableBody className=" divide-y">
  //         {AddedProducts?.map((product) => (
  //           <TableRow key={product.name} className="">
  //             <TableCell className=" text-white">{product.name}</TableCell>
  //             <TableCell className=" text-white">{product.image}</TableCell>
  //             <TableCell className=" text-white">{product.description}</TableCell>
  //             <TableCell className=" text-white">{product.price}</TableCell>
  //           </TableRow>
  //         ))}
  //         <TableRow className="">
  //           <TableCell className="border-x  text-white">
  //             <input
  //               value={newProduct.name}
  //               onChange={(e) => handleTextChange(e.target.name, e.target.value)}
  //               name="name"
  //               className="rounded-lg p-2 text-black"
  //               placeholder="Product Name"
  //               type="text"
  //             />
  //           </TableCell>
  //           <TableCell className="w-72 max-w-[250px] border-x text-white">
  //             {!newProduct.image ? (
  //               <input onChange={(e) => handleFileChange(e)} placeholder="file" type="file" />
  //             ) : (
  //               <img src={newProduct.image} className="w-full" />
  //             )}
  //           </TableCell>
  //           <TableCell className=" w-full border-x text-white">
  //             <textarea
  //               value={newProduct.description}
  //               name="description"
  //               rows={5}
  //               className=" w-full rounded-lg p-2 text-black"
  //               placeholder="product description"
  //               onChange={(e) => handleTextChange(e.target.name, e.target.value)}
  //             />
  //           </TableCell>
  //           <TableCell className="border-x text-right text-white">
  //             <input
  //               name="price"
  //               value={newProduct.price}
  //               onChange={(e) => handleTextChange(e.target.name, e.target.value)}
  //               className="rounded-lg p-2 text-black"
  //               placeholder="price"
  //               type="text"
  //             />
  //           </TableCell>
  //           <TableCell className=" border-x text-right text-white">
  //             <Button onClick={() => handleAddProduct()} className="bg-white text-black">
  //               Preview{' '}
  //             </Button>
  //           </TableCell>
  //         </TableRow>
  //       </TableBody>
  //     </Table>
  //   </div>
  // )

  return (
    <div className="">
      <div className="mx-auto grid max-w-2xl gap-y-4">
        <p className="text-white">Add new product.</p>
        <label className="text-white" htmlFor="">
          Enter Product Name
        </label>
        <input
          onChange={(e) => handleTextChange(e.target.name, e.target.value)}
          name="name"
          type="text"
          className="text-white"
        />
        <label className="text-white" htmlFor="">
          Select Product Image
        </label>
        <input type="file" className="text-white" />
        <label className="text-white" htmlFor="">
          Enter Product Description
        </label>
        <input
          onChange={(e) => handleTextChange(e.target.name, e.target.value)}
          name="description"
          type="text"
          className="text-white"
        />
        <label className="text-white" htmlFor="">
          Enter Product Price
        </label>
        <input
          onChange={(e) => handleTextChange(e.target.name, e.target.value)}
          name="price"
          type="text"
          className="text-white"
        />
        <label className="text-white" htmlFor="">
          Enter Product status
        </label>
        <input
          onChange={(e) => handleTextChange(e.target.name, e.target.value)}
          name="status"
          type="text"
          className="text-white"
        />
        <Button>Add Product</Button>
      </div>
    </div>
  )
}
