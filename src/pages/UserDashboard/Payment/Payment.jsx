import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import SectionHead from "../../Shared/SectionHead/SectionHead";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const { classId } = useParams();
  console.log(classId);
  const total = 10;
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <SectionHead subtitle="please process" titile="Payment"></SectionHead>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} classId={classId}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
