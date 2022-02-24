import { Fragment } from "react";

const UpperLeft = () => {
  return (
    <Fragment>
      <div className="top-left"></div>
      <div className="top-left1">
        <div className="glass-button">
          <div className="reflect"></div>
        </div>
        <div className="top-buttons">
          <div className="top-button red"></div>
          <div className="top-button yellow"></div>
          <div className="top-button green"></div>
        </div>
      </div>
      <div className="top-left2"></div>
    </Fragment>
  );
};

export default UpperLeft;
