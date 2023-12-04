import { Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckOutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit= async(event) =>{
        event.preventDefault();

        if(!stripe || elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return;
        }
    }

    return (
       <form onSubmit={handleSubmit}>
        <CardElement
        className="mb-3"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <Button type="submit" disabled={!stripe}>
        Pay
      </Button>
       </form>
    );
};

export default CheckOutFrom;