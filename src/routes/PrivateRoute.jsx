import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <div className="min-h-screen flex justify-center items-center"><progress className="progress w-56"></progress></div>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={location.pathname} replace></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
   };

export default PrivateRoute;