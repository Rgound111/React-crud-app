import axios from 'axios'


const API_URL = "https://papaya-marzipan-f944fd.netlify.app/users";

export const addUser = async (Data) => {
  try {
    return await axios.post(API_URL, Data);
  } catch (error) {
    console.log("error while calling post api ", error.message)
  }
}

export const getUsers = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("error while calling get api", error.message)
  }
}

export const getUser = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log("error while calling get api", error.message)
  }
}

export const editUser = async (data,id) => {
  try{
    return axios.put(`${API_URL}/${id}`,data)
  } catch(error){
    console.log("error while calling post api",error.message)
  }
}

export const deleteUser = async (id) => {
  try{
    return await axios.delete(`${API_URL}/${id}`)
  } catch(error){
    console.log("error while calling delete api",error.message)
  }
}
