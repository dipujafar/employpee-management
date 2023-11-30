import useUser from "../hook/useUser";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const UserTable = () => {
  const { users } = useUser();
  const employees = users?.filter((user) => (user.role = "Employee"));

  console.log(employees);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg  text-center font-semibold  rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Our Employees
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Bank Acc.
            </th>
            <th scope="col" className="px-6 py-3">
              Salary
            </th>
            <th scope="col" className="px-6 py-3">
              Verified
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Pay</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Details</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {employee.name}
              </th>
              <td className="px-6 py-4">{employee.email}</td>
              <td className="px-6 py-4">{employee.bankAccount}</td>
              <td className="px-6 py-4">${employee.salary}</td>
              <td className="px-6 py-4 text-right">
                {
                    employee.verified ? <IoMdCheckmark /> : <RxCross2 className="text-2xl text-red-400" />
                }
              </td>
              <td className="px-6 py-4">
                <Button className="bg-gradient-to-r from-orange-700 to-orange-300">Pay</Button>
              </td>
              <td className="px-6 py-4">
                <Button className="bg-gradient-to-r from-orange-400 to-orange-700">Details</Button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
