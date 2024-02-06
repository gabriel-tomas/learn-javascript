import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export const Redirect = () => {
  const [time, setTime] = useState(3000);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const newTime = time - 1000;
      setTime(newTime);
    }, 1000);
    if(time <= 0) {
      navigate('/about', {
        state: 'Isso é um estado'
      });
    }
  }, [navigate, time]);

  return (
    <div>
      <h1>Redirecting in {time / 1000}</h1>
    </div>
  )
}