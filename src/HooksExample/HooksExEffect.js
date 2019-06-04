import React, { useEffect,useState } from 'react';

export function HooksExEffect() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      // debugger
      console.log("[]",count)
    },[])

    useEffect(() => {
      // debugger
      console.log("after []" , count)
    }, [count])
    /*
      ==== Use of componentDidMount and componentDidUpdate in place of useEffect ====
  
        componentDidMount() {
        console.log(count)
      }
  
      componentDidUpdate() {
        console.log(count)
    }
  
     ==================================================================================
    */
    return (
      <>
        <div>You clicked {count} times</div>
        <button onClick={() => setCount(count + 1)}>*set count*</button>
      </>
    )
  }