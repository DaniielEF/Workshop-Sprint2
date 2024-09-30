import axios from 'axios'

export const postData = async (url, obj)=> {
    try {
        const response = await axios.post(url, obj)
        console.log(response)
        
    } catch (error) {
        console.error('Error en la solicitud POST', error)
        
    }    
};

export const getData = async (url) => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const PatchData = async (url, obj) => {
    try {
      const resp = await axios.patch(url, obj);
      return resp;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const DeleteData = async (url) => {
    try {
      const resp = await axios.delete(url);
      return resp;
    } catch (error) {
      console.log(error);
    }
  };