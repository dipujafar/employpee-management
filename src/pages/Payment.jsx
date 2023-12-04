import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/title/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_key); 

const Payment = () => {
    return (
        <div>
            <SectionTitle heading='Payment' subHeading="Please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom></CheckOutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;