import { Button } from "@material-tailwind/react";
import useUser from "../hook/useUser";
import Swal from "sweetalert2";
import useAxiosSecure from "../hook/useAxiosSecure";

const AllEmployees = () => {
  const { users, refetch } = useUser();
  const notAdmin = users.filter((user) => user.role !== "Admin");
  const verifiedEmployee = notAdmin.filter((user) => user.verified === true);
  const axiosSecure = useAxiosSecure();

  const handleMakeHR = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't Make HR!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, want!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/employees/hr/${id}`).then((res) => {
          if (res?.data?.modifiedCount > 0) {
            Swal.fire({
              title: "Successfully made HR!",
              text: "Your User has been HR.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };

  const handleFire = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't Fire Him/Her!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, want!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/employees/fire/${id}`).then((res) => {
            if (res?.data?.modifiedCount > 0) {
              Swal.fire({
                title: "Fired",
                text: "Your User has been Fired.",
                icon: "success",
              });
            }
            refetch();
          });
        }
      });
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Designation
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Make HR</span>
            </th>

            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {verifiedEmployee.map((employee) => (
            <tr
              key={employee._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {employee.name}
              </th>
              <td className="px-6 py-4">{employee.designation}</td>
              <td className="px-6 py-4">
                {employee.role === "HR" ? (
                  <Button className="bg-gradient-to-r from-green-400 to-green-200">
                    HR
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleMakeHR(employee._id)}
                    className="bg-gradient-to-r from-orange-400 to-orange-300"
                  >
                    Make HR
                  </Button>
                )}
              </td>
              <td className="px-6 py-4 text-right">
                {employee?.fired === true ? (
                  <Button className="bg-gradient-to-r from-red-700 to-red-400">
                    Fired
                  </Button>
                ) : (
                  <Button onClick={()=>handleFire(employee._id)} className="bg-gradient-to-r from-red-500 to-red-300">
                    Fire
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEmployees;
