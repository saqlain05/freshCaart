import { ReactNode,Suspense } from "react"
import { Head } from "blitz"
import Header from "app/products/components/Header"


type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "freshCart"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Suspense fallback="...."><Header /> <br /> <br /> <br /> <br /> <br/></Suspense>
      {children}
    </>
  )
}

export default Layout
