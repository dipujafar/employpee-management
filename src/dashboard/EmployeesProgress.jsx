import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hook/useAxiosSecure";
import moment from "moment";


const EmployeesProgress = () => {
    const axiosSecure = useAxiosSecure();
    const {data: workData = []} = useQuery({
        queryKey: ["work"],
        queryFn: async()=>{
            const res = await  axiosSecure.get("/allWork");
            return res.data
        }
    })
    return (
        

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                   Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Task
                </th>
                <th scope="col" className="px-6 py-3">
                   Work Hours
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>
            {
                workData?.map(work=><tr key={work._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {work.name}
                </th>
                <td className="px-6 py-4">
                    {work.email}
                </td>
                <td className="px-6 py-4">
                    {work.task}
                </td>
                <td className="px-6 py-4">
                    {work.workHours} hours
                </td>
                <td className="px-6 py-4">
                    {moment(work.startDate).format('MMMM Do YYYY')}
                </td>
            </tr>)
            }
        </tbody>
    </table>
</div>

    );
};

export default EmployeesProgress;