import React from "react";

const FormInput = ( props ) => {
  return (
    <div>
      {/* <label htmlFor=""></label> */}
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;
