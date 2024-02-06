import { useLocation } from 'react-router-dom';
import './style.css';

export const Home = () => {
  const { state } = useLocation();

  return (
    <div>
      <h1>Hello, World!</h1>
      {state? <p>Tem um state: "{state}"</p> : null}
    </div>
  )
}