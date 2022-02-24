import { Fragment, useState, useEffect } from "react";
import {useSpeechSynthesis} from 'react-speech-kit';

const Right = (props) => {

  const [pokeName, setPokeName] = useState();

  useEffect(() => {
    if(props.data !== null) {
      setPokeName(props.data.name)
    }
  }, [props.data])

  const { speak } = useSpeechSynthesis();
  

  return (
    <Fragment>
      <div className="right">
        <div className="info-screen">
          {pokeName && <p>{pokeName}</p>}
        </div>
        <div className="keyboard">
          <button className="key" onClick={() => speak({text: pokeName})}></button>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
        </div>
        <div className="right-buttons leafB"></div>
        <div className="right-buttons yellowB"></div>
        <div className="right-buttons greenB"></div>
        <div className="right-buttons orangeB"></div>
        <div className="arrow-button leftA">
          <div className="arrowT leftT"></div>
        </div>
        <div className="arrow-button rightA">
          <div className="arrowT rightT"></div>
        </div>
        <div className="lastA">
          <div className="left-red-arrow"></div>
        </div>
        <div className="square-button right1"></div>
        <div className="square-button right2"></div>
      </div>
      <div className="top-right1"></div>
      <div className="top-right2"></div>
    </Fragment>
  );
};

export default Right;
