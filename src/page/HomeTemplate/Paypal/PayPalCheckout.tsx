import React, { useRef, useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons, CreateOrderBraintreeActions } from "@paypal/react-paypal-js";
function PayPalCheckout():JSX.Element {
    const paypal = useRef();
    const [transactionStatus, setTransactionStatus] = useState(null);

    // if (transactionStatus === "success") {
    //     return alert('thanh toan thanh cong')
    // }

    // if (transactionStatus === "failure") {
    //     return alert('thanh toan that bai')
    // }

    return (
        <PayPalScriptProvider options={{clientId:'AeAytdnsAhXqHfzEqay1qztuo8t1gf0G86K756pDYdnPXZ1EYcCXsaXwCSuhIAQJH-8KAlIg1aHqID9V'}}>
            <PayPalButtons style={{label:'pay'}}  createOrder={(data:any, actions:any,)=>{
                console.log(data)
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            amount: {
                                currency_code: "USD",
                                value: 0.1,
                            },
                        },
                    ],
                });
            }}
            onApprove={async (data, actions:any)=>{
                const order = await actions.order.capture();
                console.log(order? 'thanh cong': '')
            }}
            onError={(err) => {
                console.log(err);
                // setTransactionStatus("failure");
            }}
            />
        </PayPalScriptProvider>
    );
}

export default PayPalCheckout;