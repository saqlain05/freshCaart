import React, { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, useRouter, useQuery, useMutation, useParam, BlitzPage } from "blitz"
import getOrder from "app/orders/queries/getOrder"
import updateOrder from "app/orders/mutations/updateOrder"
import OrderForm from "app/orders/components/OrderForm"

export const EditOrder = () => {
  const router = useRouter()
  const orderId = useParam("orderId", "number")
  const [order, { mutate }] = useQuery(getOrder, { where: { id: orderId } })
  const [updateOrderMutation] = useMutation(updateOrder)

  return (
    <div>
      <h1>Edit Order {order.id}</h1>
      <pre>{JSON.stringify(order)}</pre>

      <OrderForm
        initialValues={order}
        onSubmit={async () => {
          try {
            const updated = await updateOrderMutation({
              where: { id: order.id },
              data: { name: "MyNewName" },
            })
            await mutate(updated)
            alert("Success!" + JSON.stringify(updated))
            router.push("/orders/[orderId]", `/orders/${updated.id}`)
          } catch (error) {
            console.log(error)
            alert("Error creating order " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditOrderPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditOrder />
      </Suspense>

      <p>
        <Link href="/orders">
          <a>Orders</a>
        </Link>
      </p>
    </div>
  )
}

EditOrderPage.getLayout = (page) => <Layout title={"Edit Order"}>{page}</Layout>

export default EditOrderPage
