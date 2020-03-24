import React, { useRef, useEffect, useState } from "react";

const useMousePosition = ({ observeNode }: { observeNode?: React.RefObject<HTMLElement> }) => {
  const [event, setEvent] = useState()
  const [isMouseDown, setIsMouseDown] = useState()
  useEffect(() => {
    const onMouse = (event: MouseEvent) => {
      setEvent(event)
    }
    const onMouseDown = () => {
      setIsMouseDown(true)
    }
    const onMouseUp = () => {
      setIsMouseDown(false)
    }
    if (observeNode && observeNode.current) {
      observeNode?.current?.addEventListener('mousemove', onMouse)
      observeNode?.current?.addEventListener('mousedown', onMouseDown)
      observeNode?.current?.addEventListener('mouseup', onMouseUp)
    }
    return () => {
      observeNode?.current?.removeEventListener('mousemove', onMouse)
      observeNode?.current?.removeEventListener('mousedown', onMouseDown)
      observeNode?.current?.removeEventListener('mouseup', onMouseUp)
    }
  }, [observeNode])
  return { x: event?.offsetX, y: event?.offsetY, isMouseDown }
};

export default useMousePosition