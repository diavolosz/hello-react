import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={() => props.reset()}>
      {props.text}
    </button>
  );
};

const Application = () => {

  const [name, setName] = useState();

  const reset = () => {
    setName("");
    console.log('hi');
  };

  return (
    <main>
      <input
        value = {name}
        onChange = {(event) => {
          setName(event.target.value);
        }}
        placeholder='type your name'/>
      <Button text={'reset'} reset={reset} />

      <Fragment>
        {name && <h1>Hello {name}</h1>}
      </Fragment>

    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
