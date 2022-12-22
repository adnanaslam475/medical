import { useMemo } from "react";
import { useSelector } from "react-redux";

export const selectUser = (state) => {
    return state.auth.user;
};

const useUser = () => {
    const user = useSelector(selectUser);
    // return user;
    localStorage.setItem("user", JSON.stringify(user));
    return useMemo(() => ({ user }), [user]);
};

export default useUser