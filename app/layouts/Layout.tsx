import { ReactNode,Suspense, useReducer, useState } from "react"
import { Head } from "blitz"
import Header from "app/products/components/Header"
import ItemContext, { ItemContextInterface } from "app/contexts/ItemContext"
import ItemReducer from "app/reducers/ItemReducer"
import DigitalRamaFooter from "app/products/components/DigitalRamaFooter"
import Loader from "app/products/components/Loader"


type LayoutProps = {
  title?: string
  children: ReactNode
}

export const contextValues:ItemContextInterface = {
  itemQty: 0,
  totalAmount: 0,
  localObject: {},
  id: 0
}

const Layout = ({ title, children }: LayoutProps) => {

  const [state, dispatch] = useReducer(ItemReducer, contextValues)
  const [show, setShow] = useState(false)
  const [grandQty, setGrandQty] = useState(0)
  const [grandAmount, setGrandAmount] = useState(0)
  
  return (
    <>
      <Head>
        <title>{title || "freshCart"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ItemContext.Provider value={{...contextValues, show, setShow, grandQty, setGrandQty, grandAmount, setGrandAmount}}> 
        <Suspense fallback={<div> <Loader /> </div>}><Header /> <br /> <br /> <br /> <br /> <br/>  </Suspense>
        {children}
        <DigitalRamaFooter />
      </ItemContext.Provider>  
      {/* <DigitalRamaFooter /> */}
    </>
  )
}

export default Layout
