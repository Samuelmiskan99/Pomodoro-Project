import { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingContext } from '../context/SettingContext';
import PropTypes from 'prop-types';

const CountdownTimer = ({ timer = 25, animate = true }) => {
   const { stopTimer } = useContext(SettingContext);

   return (
      <CountdownCircleTimer
         isPlaying={animate}
         duration={timer * 60} // Durasi dalam detik (misalnya 25 menit x 60 detik)
         colors={['#FF4500']}
         strokeWidth={12}
         size={220}
         trailColor='#1A1A1D'
         onComplete={() => {
            stopTimer();
         }}>
         {({ remainingTime }) => (
            <div className='text-red-500 text-4xl font-bold'>
               {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? `0${remainingTime % 60}` : remainingTime % 60}
            </div>
         )}
      </CountdownCircleTimer>
   );
};

CountdownTimer.propTypes = {
   timer: PropTypes.number,
   animate: PropTypes.bool,
};

export default CountdownTimer;
