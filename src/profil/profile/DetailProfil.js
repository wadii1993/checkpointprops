import React from "react";
import { defaultProps } from 'default-props';
import proptypes from "prop-types";
const DetailProfil = ({ pers, children }) => {
  return (
    <div key={pers.id}>
      {children}
      <h1>
        <span style={{ color: "red" }}>Name :</span> {pers.fullName}
      </h1>
      <h1>
        <span style={{ color: "red" }}>Bio :</span> {pers.Bio}
      </h1>
      <h1>
        <span style={{ color: "red" }}>Profession:</span> {pers.profession}
      </h1>
    </div>
  );
};
DetailProfil.defaultProps ={
    pers : {
        id: Math.random(),
        fullName: "wahm",
        Bio: "mouch",
        profession: "blabnlbla",
    }

}

DetailProfil.proptypeses ={
    pers : proptypes.object,
}

export default DetailProfil;
