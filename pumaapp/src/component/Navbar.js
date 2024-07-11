import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [text, setText] = useState('GET FREE 5% FOR ALL ONLINE PAYMENT @@@@');

  useEffect(() => {
    // Change text after 2 seconds (2000 milliseconds)
    const timer = setTimeout(() => {
      setText('FREE SHIIPING FOR ALL ONLLING PAYMENT',"FREE RETRUN  !!");
    }, 3000);
    const timer1 = setTimeout(() => {
      setText("FREE RETRUN AND FREE EXCHANGE");
    }, 4000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
    return () => clearTimeout(timer1);
  }, []);

  return <div className='main'>{text}</div>;
};

export default Navbar;
