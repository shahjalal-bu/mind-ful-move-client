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

  return (
    <div>
      <SectionHead subtitle="please process" title="Payment"></SectionHead>
      <Elements stripe={stripePromise}>
        <CheckoutForm classId={classId}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
