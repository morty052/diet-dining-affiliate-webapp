import { Button } from 'src/components/ui/button'
import OrderTable from './OrderTable'
import { TabsBuilder as Tabs, TabsBuilder } from 'src/components'

type Props = {}

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

const tabItems = [
  {
    title: 'All',
    value: 'all',
    component: <OrderTable title="All Orders" />,
  },
  {
    title: 'Completed',
    value: 'completed',
    component: <OrderTable title="Completed Orders" />,
  },
  {
    title: 'Pending',
    value: 'pending',
    component: <OrderTable title="Pending Orders" />,
  },
  {
    title: 'Cancelled',
    value: 'cancelled',
    component: <OrderTable title="Cancelled Orders" />,
  },
]

function Orders({}: Props) {
  return (
    <div className="w-full p-4">
      <TabsBuilder defaultValue={tabItems?.[0].value} tabItems={tabItems} />
      {/* <OrderTable /> */}
    </div>
  )
}

export default Orders
