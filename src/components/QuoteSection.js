import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function QouteSection() {
  return (
    <div className='section quote'>
      <p className='qoute-text'>
        <FontAwesomeIcon icon={faQuoteLeft} /> Food is everything we are. It's
        an extension of nationalist feeling, ethnic feeling food also makes you
        feel good . Good food gives you one of the most important health
        benefits
      </p>
      <p className='qoute-auther'>- Akindele Ayorinde</p>
    </div>
  );
}
