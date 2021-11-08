import axiosWithAuth from "../utils/axiosWithAuth"


export const fetcharticles = () => {
    return axiosWithAuth()
       .get(`http://localhost:5000/api/articles`)
       .then(res => res)
       .catch(err => err);

};

export const fetchbyid = (editId) => {
    return axiosWithAuth()
       .get(`http://localhost:5000/api/articles/:${editId}`)
       .then(res => res)
       .catch(err => err);

};