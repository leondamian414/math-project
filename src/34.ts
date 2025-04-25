import { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {Object.keys(data).map(key => {
        if (key === 'error') {
          return <p key={key}>{data[key]}</p>;
        } else {
          return <div key={key}>
            <h2>{key}</h2>
            <p>{data[key]}</p>
          </div>;
        }
      })}
    </div>
  );
};

export default MyComponent;
