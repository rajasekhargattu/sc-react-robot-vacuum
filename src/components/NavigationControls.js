import React from 'react';

const OFFSET = 3;

const InputControls = ({ locations, setLocations, width, height }) => {
  function handleMovesClick(robaotDirection) {
    console.log('InputControls==>', locations.x, locations.y);

    switch (robaotDirection) {
      case 'Down':
        const bottom = height - 60;
        if (locations.y < bottom) {
          console.log('In side Down', locations.x, locations.y, bottom);
          setLocations({
            x: parseInt(locations.x),
            y: parseInt(locations.y) + 40 + OFFSET
          });
        }

        break;

      case 'Up':
        const top = 20;
        if (locations.y > top) {
          console.log('In side Up', locations.x, locations.y, top);
          setLocations({
            x: parseInt(locations.x),
            y: parseInt(locations.y) - 40 - OFFSET
          });
        }

        break;

      case 'Left':
        const left = 20;
        if (locations.x > left) {
          console.log('In side Left', locations.x, locations.y, left);
          setLocations({
            x: parseInt(locations.x) - 40 - OFFSET,
            y: parseInt(locations.y)
          });
        }

        break;

      case 'Right':
        const right = width - 60;
        if (locations.x < right) {
          console.log('In side Right', locations.x, locations.y, right);
          setLocations({
            x: parseInt(locations.x) + 41 + OFFSET,
            y: parseInt(locations.y)
          });
        }

        break;

      default:
        setLocations({ x: 0, y: 0 });
        break;
    }
  }

  return (
    <div className='directionButton'>
      <div className='topButton'>
        <button onClick={() => handleMovesClick('Up')}>UP</button>
      </div>
      <div className='leftButton'>
        <button onClick={() => handleMovesClick('Left')}> Left </button>
        <button onClick={() => handleMovesClick('Right')}>Right </button>
      </div>
      <div className='topButton'>
        <button onClick={() => handleMovesClick('Down')}>Down</button>
      </div>
    </div>
  );
};

export default InputControls;
