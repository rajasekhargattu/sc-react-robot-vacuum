import React, { useState } from 'react';

import { useCanvas } from './Canvas';
import InputControls from './InputControls';

function App() {
  const WIDTH = 570;
  const HEIGHT = 375;
  const [xcor, setXcor] = useState(0);
  const [ycor, setYcor] = useState(0);
  const [locations, setLocations, canvasRef] = useCanvas();
  const [displayNavigation, setDisplayNavigation] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLocations({ x: xcor, y: ycor });
    setDisplayNavigation(true);
  }

  return (
    <>
      <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />
      <form onSubmit={handleSubmit}>
        <label htmlFor='xcoordinates' className='labelSpace'>
          X-Coordinates:
        </label>
        <input
          id='xcoordinates'
          className='numberInput'
          value={xcor}
          placeholder={10}
          min={0}
          max={WIDTH}
          name='xcoordinates'
          required
          type='number'
          onChange={event => setXcor(event.target.value)}
        />

        <label htmlFor='ycoordinates' className='labelSpace'>
          Y-Coordinates:
        </label>
        <input
          id='ycoordinates'
          className='numberInput'
          value={ycor}
          placeholder={10}
          min={0}
          max={HEIGHT}
          name='xcoordinates'
          required
          type='number'
          onChange={event => {
            setYcor(event.target.value);
          }}
        />

        <input className='labelSpace' type='submit' value='Set Bot Position' />
      </form>
      {displayNavigation && (
        <>
          <InputControls
            locations={locations}
            setLocations={setLocations}
            width={WIDTH}
            height={HEIGHT}
          />
        </>
      )}
    </>
  );
}

export default App;
