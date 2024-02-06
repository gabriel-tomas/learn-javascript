import {useParams, useSearchParams } from 'react-router-dom';
import './style.css';

export const AboutContent = () => {
  const params = useParams();
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>About content based on /about</h1>
      <p>Param: {params.id}   Query String: {qs.get('q')}</p>
    </div>
  )
}