import React from "react";
import Spinner from "../../img/spinner.gif";

const Loading = () => {
  return <img src={Spinner} style={{width:'200px',margin:'auto',display:'block'}} alt="loading" />;
};

export default Loading;
