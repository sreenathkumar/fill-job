import axios from "axios";

const authCheck = () => {

}
export const loginUser =  async(userData:object)=>  {
  try {
     const response = await axios.post(process.env.REACT_AUTH_API + "/login", userData);
    const { data } = response;

    //set tokens to local storage
    if (data) {
      localStorage.setItem('token', JSON.stringify({
        access_token: {
          data: data.access_token,
          expires: new Date().getTime() +  30 * 60 * 1000
        },
        refresh_token: {
          data: data.refresh_token,
          expires: new Date().getTime() +  30*24*60* 60 * 1000
        },   
      }));

      return {
        status: 'success',
      }
    } else {
      return {
        status: 'error',
        message: 'Something went wrong'
      }
    }

  } catch (error) {
    console.log(error.response); 
    return {
      status: 'error',
      message: error.response.data.error
    }
  }
}