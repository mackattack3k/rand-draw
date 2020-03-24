import React, { useRef, useEffect, useState, useCallback } from "react";
import useResizeObserver from './useResizeObserver'
import useMousePosition from './useMousePosition'
import "./App.css";

function toColor(i: number) {
    let hexCode = "#" 

    while ( hexCode.length < 7 ) {
      hexCode += (Math.round(i * 15)).toString(16) 
    }

    return hexCode 
  }

const MAX_COLOR_HEX = 256
const MIN_SIZE = 5

const App = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<HTMLDivElement>(null);
  const drawRef = useRef<HTMLDivElement>(null);
  const resize = useResizeObserver({ observeNode: drawRef})
  const mouse = useMousePosition({ observeNode: canvas })

  const [color, setColor] = useState({
    val: 0.0001,
    direction: 'UP'
  })
  const [radius, setRadius] = useState({
    size: 25,
    direction: 'UP'
  })
  const [colorSpeed, setColorSpeed] = useState(50)
  const [sizeSpeed, setSizeSpeed] = useState(50)

  const { contentRect: size } = resize ?? {}
  const { isMouseDown, x, y  } = mouse

  const setNextColor = () => {
    const toColor = color.direction === 'UP' ? color.val + 0.01 * colorSpeed : color.val - 0.01 * colorSpeed
    const toDireciton = toColor > MAX_COLOR_HEX ? 'DOWN' : toColor < 0 ? 'UP' : color.direction
    setColor({
      val: toColor,
      direction: toDireciton
    })
  }
  const setNextRadius = () => {
    const factor = sizeSpeed / 100
    const nextSize = radius.direction === 'UP' ? radius.size + factor : radius.size - factor
    const direction = radius.size > 50 ? 'DOWN' : radius.size < MIN_SIZE ? 'UP' : radius.direction
    setRadius({
      direction,
      size: nextSize
    })
  }
  const changeColorSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorSpeed(parseInt(e.target.value))
  }
  const changeSizeSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSizeSpeed(parseInt(e.target.value))
  }

  useEffect(() => {
    if(!isMouseDown) {
      return
    }
    if(!canvas?.current?.getContext) {
      return
    }
    const ctx = canvas.current.getContext('2d');
    if (!ctx) {
      return
    }
    
    ctx.beginPath();
    const circleRadius: number = radius.size < 0 ? 0 : radius.size
    ctx.arc(x, y, circleRadius, 0, 2 * Math.PI);
    ctx.fillStyle = toColor(color.val);
    ctx.fill()
    setNextColor()
    setNextRadius()
  }, [isMouseDown, x, y])
  return (
    <div className="App" ref={appRef}>
      <div>
        <div>
          Color shift speed ({colorSpeed})
          <input type="range" min="10" max="100" value={colorSpeed} onChange={changeColorSpeed} />
        </div>
        <div>
          Size shift speed ({sizeSpeed})
          <input type="range" min="10" max="100" value={sizeSpeed} onChange={changeSizeSpeed}  />
        </div>
        <div>
          Current color: {color.val} | {toColor(color.val)}
        </div>
      </div>
      <div className="draw" ref={drawRef}>
        <canvas ref={canvas} width={size?.width ?? 0 -1} height={size?.height - 5}></canvas>
      </div>
    </div>
  );
};

export default App;
