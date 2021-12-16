import React, {useState, useEffect} from "react";
import axios from "axios";

export default function ProgressApi(props) {
  const [spinnerCall, setSpinnerCall] = useState(false);

  useEffect(() => {
    //componentDidMount,update,unmount
    axios.interceptors.request.use((request) => {
      setSpinnerCall(true);
      return request;
    });

    axios.interceptors.response.use(
      (response) => {
        //1st parameter => success case , 2nd parameter => error case
        setSpinnerCall(false);
        return response;
      },
      (error) => {
        setSpinnerCall(false);
        throw error;
      }
    );
  }, []);

  return <div>{React.cloneElement(props.children,{spinnerCall})}</div>;
}
