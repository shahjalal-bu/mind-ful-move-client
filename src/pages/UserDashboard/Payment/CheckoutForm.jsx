import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";

import "./CheckoutForm.css";
import { useAuth } from "../../../contexts/AuthContext";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const CheckoutForm = ({ classId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { currentUser } = useAuth();
  const [axiosSecure] = useAxios();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { classId }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [classId, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: currentUser?.email || "unknown",
            name: currentUser?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        classId: classId,
        email: currentUser?.email,
        transactionId: paymentIntent.id,
        date: new Date(),
        quantity: 1,
      };
      axiosSecure
        .patch(`users/payment/${currentUser?.email}`, payment)
        .then((res) => {
          if (res.status === 200) {
            // display confirm
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Payment",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/my-enrolled-classes");
          }
        });
    }
  };

  return (
    <>
      <form className="w-2/3 m-8 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                padding: "10px",

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
        <div className="flex justify-center">
          <button
            className="btn btn-primary btn-md mt-4 mx-auto"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay Now <FaArrowAltCircleRight />
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
