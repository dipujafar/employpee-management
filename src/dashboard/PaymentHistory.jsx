import { useQuery } from "@tanstack/react-query";
import useAuth from "../hook/useAuth";
import useAxiosSecure from "../hook/useAxiosSecure";
import moment from "moment";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data = [] } = useQuery({
    queryKey: [user.email, "payment"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Month
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Transaction Id
            </th>
          </tr>
        </thead>
        <tbody>
            {
                    data.map(payment=>  <tr key={payment._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td
                      className="px-6 py-4"
                    >
                     {moment(payment.date).format('MMMM')}
                    </td>
                    <td className="px-6 py-4">${payment.amount}</td>
                    <td className="px-6 py-4">{payment.transactionId}</td>
                  </tr>)
            }
         
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
