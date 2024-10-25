import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
const SettingContext = createContext();
const SettingContextProvider = (props) => {
   const [pomodoro, setPomodoro] = useState(25); // Default waktu kerja
   const [executing, setExecuting] = useState({
      work: 25,
      short: 5,
      long: 15,
      active: 'work',
   });
   const [startAnimate, setStartAnimate] = useState(false);
   const [isSettingActive, setIsSettingActive] = useState(false);

   const handleChange = (event) => {
      const { name, value } = event.target;
      setExecuting({
         ...executing,
         [name]: parseInt(value),
      });
   };

   function setCurrentTimer(active_state) {
      const updatedExecuting = {
         ...executing,
         active: active_state,
      };
      updateExecute(updatedExecuting);
      setTimerTime(updatedExecuting);
   }

   function startTimer() {
      setStartAnimate(true); // Memulai timer
   }

   function pauseTimer() {
      setStartAnimate(false); // Menghentikan timer
   }

   function stopTimer() {
      setStartAnimate(false); // Menghentikan timer setelah selesai
   }

   // Fungsi untuk mereset timer ke nilai default

   const toggleSetting = () => {
      setIsSettingActive(!isSettingActive); // Mengaktifkan atau menonaktifkan mode pengaturan
      setTimerTime(executing); // Pastikan timer di-update ketika pengguna selesai mengatur
   };

   const setTimerTime = (evaluate) => {
      switch (evaluate.active) {
         case 'work':
            setPomodoro(evaluate.work);
            break;
         case 'short':
            setPomodoro(evaluate.short);
            break;
         case 'long':
            setPomodoro(evaluate.long);
            break;
         default:
            setPomodoro(25);
            break;
      }
   };

   const updateExecute = (updatedSettings) => {
      setExecuting(updatedSettings); // Update state dengan nilai timer baru
      setTimerTime(updatedSettings); // Set timer dengan nilai baru
   };

   return (
      <SettingContext.Provider
         value={{
            stopTimer,
            updateExecute,
            startTimer,
            pauseTimer,

            pomodoro,
            executing,
            startAnimate,
            toggleSetting,
            isSettingActive,
            setCurrentTimer,
            handleChange,
         }}>
         {props.children}
      </SettingContext.Provider>
   );
};

SettingContextProvider.propTypes = {
   children: PropTypes.node.isRequired,
};

export { SettingContextProvider as default, SettingContext };
