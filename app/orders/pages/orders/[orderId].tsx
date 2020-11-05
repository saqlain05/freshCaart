import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useParam, BlitzPage, useMutation } from "blitz"
import getOrder from "app/orders/queries/getOrder"
import deleteOrder from "app/orders/mutations/deleteOrder"

export const Order = () => {
  const router = useRouter()
  const orderId = useParam("orderId", "number")
  const [order] = useQuery(getOrder, { where: { id: orderId } })
  const [deleteOrderMutation] = useMutation(deleteOrder)

  return (
    <div>
      <h1>Order {order.id}</h1>
      <pre>{JSON.stringify(order, null, 2)}</pre>

      <Link href="/orders/[orderId]/edit" as={`/orders/${order.id}/edit`}>
        <a>Edit</a>
      </Link>

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteOrderMutation({ where: { id: order.id } })
            router.push("/orders")
          }
        }}
      >
        Delete
      </button>
    </div>
  )
}

const ShowOrderPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href="/orders">
          <a>Orders</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Order />
      </Suspense>
    </div>
  )
}

ShowOrderPage.getLayout = (page) => <Layout title={"Order"}>{page}</Layout>

export default ShowOrderPage
