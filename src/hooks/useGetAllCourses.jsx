import axios from "axios";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { setCourse, setLoading } from "../redux/courseSlice";

const useGetAllCourses = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get('https://66f931ef2a683ce9731134aa.mockapi.io/api/v1/SMIT');
                dispatch(setCourse(res.data));
            } catch (error) {
                console.log(error.message);
            } finally {
                dispatch(setLoading());
            }
        }

        fetchCourses();
    }, []);
}

export default useGetAllCourses;