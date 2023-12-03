import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey: ["user"],
        queryFn: async()=>{
            const res = await axiosSecure.get("/employees");
            console.log(res.data)
            return res.data;
        }
    })
    return {users, refetch};
};

export default useUser;