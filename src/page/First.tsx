import { useEffect } from "react";

export default function First() { 
    useEffect(() => {
        fetch(`${process.env.REACT_APP_ENDPOINT}/`)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    return (
        <div>
            FirstPage
        </div>
    );
  };