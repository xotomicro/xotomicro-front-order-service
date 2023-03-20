import React from "react"
import OrderApi from "@api/OrderApi"
import {getToken} from "@services/OrderServices"

const token: string | null = getToken()

export const OrderWeb: any = (props: any): JSX.Element => (
    <div className="section-app__item">
        <p>Order list</p>
        <OrderApi token={token} />
    </div>
)
