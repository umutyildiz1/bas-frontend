import React, {useState, useEffect} from "react";
import axios from "axios";

export default function ProgressApi(props) {
  const [spinnerCall, setSpinnerCall] = useState(false);
  const {path} = props;
  useEffect(() => {
    //componentDidMount,update,unmount
    const checkUrlWithSpinner = (url, stateValue) =>{
      if(url === path){
        setSpinnerCall(stateValue)
      }
    }

    axios.interceptors.request.use((request) => {
      //setSpinnerCall(true);
      console.log("path:" + path)
      console.log("url:" + request.url)
      checkUrlWithSpinner(request.url,true)
      return request;
    });

    axios.interceptors.response.use(
      (response) => {
        //1st parameter => success case , 2nd parameter => error case
        //setSpinnerCall(false);
        checkUrlWithSpinner(response.config.url,false)
        return response;
      },
      (error) => {
        //setSpinnerCall(false);
        checkUrlWithSpinner(error.config.url,false)
        throw error;
      }
    );
  }, []);

  
  

  return <div>{React.cloneElement(props.children,{spinnerCall})}</div>;
}
