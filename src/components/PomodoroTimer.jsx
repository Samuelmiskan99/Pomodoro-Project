import { useContext, useState } from 'react';
import Button from './Button';
import { SettingContext } from '../context/SettingContext';

const PomodoroTimer = () => {
   const { updateExecute } = useContext(SettingContext);
   const [newTimer, setNewTimer] = useState({
      work: 25,
      shortBreak: 5,
      longBreak: 15,
      active: 'work',
   });

   const handleChange = (input) => {
      const { name, value } = input.target;
      switch (name) {
         case 'work':
            setNewTimer({
               ...newTimer,
               work: parseInt(value),
            });
            break;
         case 'shortBreak':
            setNewTimer({
               ...newTimer,
               short: parseInt(value),
            });
            break;
         case 'longBreak':
            setNewTimer({
               ...newTimer,
               long: parseInt(value),
            });
            break;
         default:
            break;
      }
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      updateExecute(newTimer);
   };

   return (
      <div className='flex flex-col items-center justify-center mt-8'>
         <form noValidate>
            <div className='flex space-x-6 mb-6'>
               <input
                  name='work'
                  onChange={handleChange}
                  value={newTimer.work}
                  className='w-16 h-16 text-center rounded-full bg-gray-800 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500'
               />
               <input
                  name='shortBreak'
                  onChange={handleChange}
                  value={newTimer.shortBreak}
                  className='w-16 h-16 text-center rounded-full bg-gray-800 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500'
               />
               <input
                  name='longBreak'
                  onChange={handleChange}
                  value={newTimer.longBreak}
                  className='w-16 h-16 text-center rounded-full bg-gray-800 text-white text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500'
               />
            </div>
            <Button title='Set Timer' _callback={handleSubmit} />
         </form>
      </div>
   );
};

export default PomodoroTimer;
