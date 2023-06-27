import { useMemo, useEffect, useState, RefObject } from 'react';

export default function useOnScreen(ref: RefObject<HTMLElement>, oneWay:boolean) {

    const [isIntersecting, setIntersecting] = useState(false)
  
    const observer = useMemo(() => new IntersectionObserver(
      ([entry]) => {
        if(oneWay && entry.isIntersecting){
          return setIntersecting(true)
        }else if (!oneWay){
          return setIntersecting(entry.isIntersecting)
        }
      }
    ), [oneWay])
  
  
    useEffect(() => {
      observer.observe(ref.current!)
      return () => observer.disconnect()
    }, [ref, observer])
  
    return isIntersecting
  }
  