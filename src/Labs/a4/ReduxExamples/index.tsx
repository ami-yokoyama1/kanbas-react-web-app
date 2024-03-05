import React from "react";
import CounterReducer from "./CounterRedux/counterReducer";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      
    </div>
  );
};

export default ReduxExamples;