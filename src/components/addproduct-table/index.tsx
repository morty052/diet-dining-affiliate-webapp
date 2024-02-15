import { useState } from 'react'
import { Button } from '../ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

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
    price: '',
  })

  const handleTextChange = (name: any, text: string) => {
    setNewProduct((prev) => ({
      ...prev,
      [name]: text,
    }))
  }

  return (
    <div>
      <Table>
        <TableCaption>Add new product.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className=" text-white">Name</TableHead>
            <TableHead className=" text-white">Image</TableHead>
            <TableHead className=" text-white">Description</TableHead>
            <TableHead className=" text-white">Price</TableHead>
            <TableHead className=" text-white">Preview</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" divide-y">
          {/* {products?.map((product) => (
          ))} */}
          <TableRow className="">
            <TableCell className="border-x  text-white">
              <input
                value={newProduct.name}
                onChange={(e) => handleTextChange(e.target.name, e.target.value)}
                name="name"
                className="rounded-lg p-2 text-black"
                placeholder="Product Name"
                type="text"
              />
            </TableCell>
            <TableCell className="max-w-[250px] border-x text-white">
              <input placeholder="file" type="file" />
            </TableCell>
            <TableCell className=" w-full border-x text-white">
              <textarea
                value={newProduct.description}
                name="description"
                rows={5}
                className=" w-full rounded-lg p-2 text-black"
                placeholder="product description"
                onChange={(e) => handleTextChange(e.target.name, e.target.value)}
              />
            </TableCell>
            <TableCell className="border-x text-right text-white">
              <input
                name="price"
                value={newProduct.price}
                onChange={(e) => handleTextChange(e.target.name, e.target.value)}
                className="rounded-lg p-2 text-black"
                placeholder="price"
                type="text"
              />
            </TableCell>
            <TableCell className=" border-x text-right text-white">
              <Button onClick={() => console.log(newProduct)} className="bg-white text-black">
                Preview{' '}
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
