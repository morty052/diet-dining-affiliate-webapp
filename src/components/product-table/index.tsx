import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

interface IProduct {
  name: string
  image: string
  description: string
  price: number
}

type Props = {
  products: IProduct[]
}

function ProductTable({ products }: Props) {
  return (
    <div>
      <Table>
        <TableCaption>Manage your products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px] text-white">Name</TableHead>
            <TableHead className="w-[150px] text-white">Image</TableHead>
            <TableHead className=" text-white">Description</TableHead>
            <TableHead className="text-right text-white">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" divide-y">
          {products?.map((product) => (
            <TableRow key={product.name} className="">
              <TableCell className=" w-[200px] text-white">{product.name}</TableCell>
              <TableCell className="w-[150px] text-white">{product.image}</TableCell>
              <TableCell className=" w-[400px] text-white">{product.description}</TableCell>
              <TableCell className="pr-8 text-right text-white">${product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ProductTable
