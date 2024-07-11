import React, { useState, useEffect } from 'react';

const TextChanger = () => {
  const [text, setText] = useState('get free 5% discount for all online payment');

  useEffect(() => {
    // Change text after 2 seconds (2000 milliseconds)
    const timer = setTimeout(() => {
      setText('FREE SHIIPING FOR ALL ONLLING PAYMENT');
    }, 2000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return <div>{text}</div>;
};

export default TextChanger;
