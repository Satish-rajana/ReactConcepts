import { useState, useEffect } from "react"

export default function UseEffect() {

const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/test')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}

