import React, {useEffect, useState} from "react"
import {ApiSystem, OrderModel} from "@xotomicro/xotomicro-front-common-registry"

function OrderApi({token}: any) {
    const [orders, setOrders]: any = useState(null)
    const [loading, setLoading]: any = useState(false)

    useEffect(() => {
        // eslint-disable-next-line prettier/prettier
        (async () => {
            setLoading(true)
            const data = await ApiSystem.getRequest({url: `http://${process.env.SERVICE_URL}:8080/orders`})
            setOrders(data)
            setLoading(false)
        })()
    }, [token])

    if (loading) return <p>Loading...</p>

    if (orders) {
        return (
            <div className="order">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order: OrderModel, index: React.Key | null | undefined) => (
                            <tr key={index}>
                                <td>{order.id}</td>
                                <td>{order.orderType}</td>
                                <td>{order.productName}</td>
                                <td>{order.productDescription}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    return <p>Cannot load data</p>
}

export default OrderApi
