import React, { useEffect, useState } from "react";
import styles from "./intro.module.css";

const Slider = (props: {
  label: string;
  min: number;
  max: number;
  init: number;
  step?: number;
  value?: number;
  change?: (x: number) => any;
}) => {
  const [state, setState] = useState(props.init);

  return (
    <>
      <span className={styles.inputLabel}>
        ⋆ {props.label} {Math.round((props.value || state) * 100) / 100}
      </span>
      <input
        type="range"
        step={
          props.step ||
          (props.max - props.min > 100 ? 1 : (props.max - props.min) / 100)
        }
        value={props.value || state}
        min={props.min}
        max={props.max}
        onChange={(e) => {
          // e.preventDefault()
          setState(parseFloat(e.target.value));
          props.change && props.change(parseFloat(e.target.value));
        }}
        className={styles.slider}
      />
    </>
  );
};

export default Slider;
