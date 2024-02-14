import { ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

interface tabItem {
  title: string
  value: string
  component: ReactNode
}
interface Itabs {
  defaultValue: string
  tabItems: tabItem[]
}

export function TabsBuilder({ tabItems, defaultValue }: Itabs) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <TabsList>
        {tabItems.map((tab, index) => (
          <TabsTrigger className="w-28" key={index} value={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabItems.map((tab, index) => (
        <TabsContent className="w-full " key={index} value={tab.value}>
          <div className=" w-full">{tab.component}</div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
