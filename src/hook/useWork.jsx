import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useWork = () => {
    const axiosSecure = useAxiosSecure();
    const {user, loading} = useAuth();
    const {data: workData = [], refetch} = useQuery({
        queryKey: [user?.email, "work"],
        enabled: !loading,
        queryFn: async()=>{
           const res = await axiosSecure.get(`/work?email=${user?.email}`);
           return res.data;
        }
    })
    return {workData, refetch};
};

export default useWork;