import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DummyFile = () => {
  const [names, setNames] = useState("Hello");
  const [loading, setLoading] = useState(true);
  const [jsonData, setJsonData] = useState([]);
  const numbers = [1,2,3,4,5,6];
  const person = {names:"suriya",age:2};

//   console.log(`greetingHi bf==> `,greetingHi);
  

 const greetingHi = () => "hi";
  console.log(`greetingHi bf==> `,greetingHi);

  useEffect(() => {
    console.log("hello from useEffect");

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setJsonData(data))
      .catch(error => console.log("error while fetch==> ", error));

    getUserJson();
  }, [names]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // cleanup timeout on unmount
  }, []);

  async function getUserJson() {
    try {
      const resJson = await axios.get('https://jsonplaceholder.typicode.com/users');
      const sizeOfJson = resJson.data.length;
      console.log('sizeOfJson==> ' + sizeOfJson);
    } catch (error) {
      console.log("axios error==> ", error);
    }
  }

  console.log(`jsonData-===> `, jsonData);

  function onClickAction() {
    setNames(pre => pre + " suriya");
  }

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <h1>{names}</h1>
          <button onClick={onClickAction}>Click here</button>
        </>
      )}
    </>
  );
};

export default DummyFile;
