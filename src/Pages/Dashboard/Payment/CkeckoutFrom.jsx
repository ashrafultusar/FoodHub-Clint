import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseCarts from "../../../Hooks/UseCarts";
import UseAuth from "../../../Hooks/UseAuth";

const CkeckoutFrom = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState('')
  const[transactionId,setTransactionId]=useState('')
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const {user}=UseAuth()
  const [cart] = UseCarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: totalPrice })
   .then(res => {
     console.log(res.data.clientSecret)
     setClientSecret(res.data.clientSecret)
   })


  }, [axiosSecure, totalPrice]);



  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const {paymentIntent,error:confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName|| 'anonymous'
        }
      }
    })
    if (confirmError) {
  console.log('confirm error')
    }
    else {
      console.log('payment intent', paymentIntent)
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id)
        setTransactionId(paymentIntent.id)

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId:paymentIntent.id,
          date: new Date(),// utc date convert. use moment js
          cartIds: cart.map(item => item._id),
          menuItemIds: cart.map(item => item.menuId),
          status: 'pending'
        }
       const res=await axiosSecure.post('/payments', payment)
        console.log('payment saved',res.data)

      }
    }

  };




  return (
    <form onSubmit={handelSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary m-6"
        type="submit"
        disabled={!stripe|| !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && <p className="text-green-500">Your transaction Id is: { transactionId}</p>}
    </form>
  );
};

export default CkeckoutFrom;
