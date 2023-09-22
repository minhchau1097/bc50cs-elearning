import React, { useRef, useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons, CreateOrderBraintreeActions } from "@paypal/react-paypal-js";

function Payment(): JSX.Element {
    const USD = 23.000;
    let values = Math.ceil(500.000 / USD);
console.log(values)
    const paypal = useRef();
    const [transactionStatus, setTransactionStatus] = useState(null);

    // if (transactionStatus === "success") {
    //     return alert('thanh toan thanh cong')
    // }

    // if (transactionStatus === "failure") {
    //     return alert('thanh toan that bai')
    // }

    return (
        <div style={{ width: 200, minHeight: 200 }}>
            <PayPalScriptProvider options={{ clientId: 'AeAytdnsAhXqHfzEqay1qztuo8t1gf0G86K756pDYdnPXZ1EYcCXsaXwCSuhIAQJH-8KAlIg1aHqID9V' }}>
                <PayPalButtons style={{ label: 'pay', shape: 'rect', layout: 'horizontal' }} createOrder={(data: any, actions: any,) => {
                    console.log(data)
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: "USD",
                                    value: values,
                                },
                            },
                        ],
                    });
                }}
                    onApprove={async (data, actions: any) => {
                        const order = await actions.order.capture();
                        console.log(order ? 'thanh cong' : '')
                    }}
                    onError={(err) => {
                        console.log(err);
                        // setTransactionStatus("failure");
                    }}
                />
            </PayPalScriptProvider>
        </div>
    );
}

export default Payment;