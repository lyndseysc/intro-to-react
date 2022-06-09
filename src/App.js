import { hot } from 'react-hot-loader/root'; // react hot loader allows tou to change components live, without loosing state in a re-render.
import React from 'react';

function App() {
  return (
    <>
      <div> HELLO WORLD! </div>
    </>
  );
}

export default hot(App);
