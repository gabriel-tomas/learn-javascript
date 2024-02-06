import { Outlet, useLocation } from 'react-router-dom';
import './style.css';

export const About = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (
    <div>
      <h1>About</h1>
      {state ? <p>Tem um state: "{state}"</p> : null}
      <Outlet />
    </div>
  )
}