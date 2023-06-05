import React from "react";
import { useState, useRef, useEffect } from "react";
import "./StateAnim.css";
import { useTransition, animated } from "react-spring";
import { v4 as uuidv4 } from "uuid";

export default function StateAnim() {
  const [firstDisplay, setfirstDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setfirstDisplay(false);
    }, 1000);
  }, []);

  const [inputData, setinputData] = useState([
    {
      id: uuidv4(),
      txt: "jul",
    },
    {
      id: uuidv4(),
      txt: "Niska",
    },
    {
      id: uuidv4(),
      txt: "Lacrim",
    },
  ]);

  const inputRef = useRef();

  const handelData = (e) => {
    e.preventDefault();

    const newObjet = {
      id: uuidv4(),
      txt: inputRef.current.value,
    };
    setinputData([...inputData, newObjet]);

    inputRef.current.value = "";
  };

  const listTransions = useTransition(inputData, {
    from: { opacity: 0, Transform: "translateY(10px)" },
    enter: { opacity: 1, Transform: "translateY(0px)" },
    keys: inputData.map((item) => item.id),
  });
  return (
    <form onSubmit={handelData}>
      <label htmlFor="rap">Renseignez vos rapeurs favoris.</label>
      <input ref={inputRef} type="text" id="rap" />

      {firstDisplay ? (
        <ul>
          {inputData.map((item) => (
            <li key={item.id}>{item.txt}</li>
          ))}
        </ul>
      ) : (
        <ul>
          {listTransions((styles, item) => {
            return <animated.li style={styles}>{item.txt}</animated.li>;
          })}
        </ul>
      )}
    </form>
  );
}

{
  /* <ul>
    {inputData.map((item) => (
        <li key={item.id}>{item.txt}</li>
        
    ))}
    </ul> */
}
