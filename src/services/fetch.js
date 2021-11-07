import axiosWithAuth from "../utils/axiosWithAuth"


export const fetcharticles = () => {
    return axiosWithAuth()
       .get("/view")
       .then(res => res)
       .catch(err => err);

};