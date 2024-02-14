import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Button } from 'src/components/ui/button'

type Props = {
  title: string
}

function DownLoadReportButton() {
  return (
    <div className="">
      <div className="flex gap-x-2">
        {/* @ts-ignore */}
        <label htmlFor=""></label>
        <input className="w-40 rounded-md px-2 placeholder:text-center" title="date" placeholder="" type="date" />
        <Button className="bg-white text-black">Download</Button>
      </div>
    </div>
  )
}

function OrderTable({ title }: Props) {
  return (
    <div className="py-6">
      <div className="flex items-center justify-between px-2">
        <p className="text-white">{title}</p>
        <DownLoadReportButton />
      </div>
      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-white">Invoice</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Method</TableHead>
            <TableHead className="text-right text-white">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-white">INV001</TableCell>
            <TableCell className="text-white">Paid</TableCell>
            <TableCell className="text-white">Credit Card</TableCell>
            <TableCell className="text-right text-white">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default OrderTable
