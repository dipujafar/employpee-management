import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hook/useAuth";
import useAxiosSecure from "../hook/useAxiosSecure";
import { toast } from "react-toastify";
import useWork from "../hook/useWork";
import moment from "moment/moment";

const WorkSheet = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { workData, refetch } = useWork();
  console.log(workData);

  const handleWork = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = form.task?.value;
    const workHours = form.workHours?.value;
    const workData = {
      task,
      workHours,
      startDate,
      email: user?.email,
    };
    axiosSecure.post("/work", workData).then((res) => {
      if (res.data.insertedId) {
        toast.success("Successfully add this work");
        refetch();
      }
    });
  };

  return (
    <div>
      <div className="text-center text-2xl text-orange-400 mb-4">
        <h1>Your Work Sheet</h1>
      </div>
      <form onSubmit={handleWork}>
        <div className="flex gap-3 flex-col md:flex-row justify-center">
          <select
            defaultValue="default"
            name="task"
            className="border border-black p-1  w-full md:w-1/4 mb-3"
          >
            <option disabled value="default">
              Select Your Task
            </option>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="content">Content</option>
            <option value="paper-work">Paper-work</option>
          </select>
          <input
            type="number"
            name="workHours"
            placeholder="work hours"
            className="border border-black p-1  w-full md:w-1/4  mb-3"
          />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border border-black p-1   mb-3"
          />
          <button className=" bg-gradient-to-r from-green-400 to-green-200  px-3 rounded">
            <input type="submit" value="ADD" className="w-full" />
          </button>
        </div>
      </form>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                 Task
              </th>
              <th scope="col" className="px-6 py-3">
                Hours
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {
                workData.map(work=><tr key={work.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                 {work.task}
                </th>
                <td className="px-6 py-4">{work.workHours} hours</td>
                <td className="px-6 py-4">{moment(work.startDate).format('MMMM Do YYYY')}</td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkSheet;
