import Button from './components/Button';
import CountdownTimer from './components/CountdownTimer';
import { SettingContext } from './context/SettingContext';
import { useContext } from 'react';

function App() {
   const { pomodoro, executing, setCurrentTimer, toggleSetting, isSettingActive, handleChange, startTimer, pauseTimer, startAnimate } =
      useContext(SettingContext);

   return (
      <div className='flex items-center justify-center min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-8'>
         <div className='text-center p-6 sm:p-8 bg-gray-800 rounded-lg shadow-lg max-w-md w-full'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6'>Pomodoro</h1>
            <p className='text-gray-400 text-sm sm:text-lg mb-6 sm:mb-8'>your grind start here</p>

            {isSettingActive ? (
               // Tampilan pengaturan (Settings)
               <>
                  <div className='grid grid-cols-3 gap-4 mt-4'>
                     <input
                        className='w-full h-12 sm:h-16 rounded-full bg-gray-700 text-white text-xl sm:text-3xl font-bold text-center focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200'
                        name='work'
                        value={executing.work}
                        onChange={handleChange}
                     />
                     <input
                        className='w-full h-12 sm:h-16 rounded-full bg-gray-700 text-white text-xl sm:text-3xl font-bold text-center focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200'
                        name='short'
                        value={executing.short}
                        onChange={handleChange}
                     />
                     <input
                        className='w-full h-12 sm:h-16 rounded-full bg-gray-700 text-white text-xl sm:text-3xl font-bold text-center focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200'
                        name='long'
                        value={executing.long}
                        onChange={handleChange}
                     />
                  </div>
                  <div className='mt-6'>
                     <button
                        className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full focus:outline-none transition duration-300'
                        onClick={toggleSetting}>
                        Set Timer
                     </button>
                  </div>
               </>
            ) : (
               // Tampilan utama timer
               <>
                  <ul>
                     <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                        <li>
                           <Button
                              title='Work'
                              className='bg-gradient-to-r from-gray-800 to-blue-900 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-md hover:from-gray-700 hover:to-blue-800 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500'
                              _callback={() => setCurrentTimer('work')}
                           />
                        </li>
                        <li>
                           <Button
                              title='Short Break'
                              className='bg-gradient-to-r from-gray-800 to-blue-900 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-md hover:from-gray-700 hover:to-blue-800 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500'
                              _callback={() => setCurrentTimer('short')}
                           />
                        </li>
                        <li>
                           <Button
                              title='Long Break'
                              className='bg-gradient-to-r from-gray-800 to-blue-900 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-md hover:from-gray-700 hover:to-blue-800 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500'
                              _callback={() => setCurrentTimer('long')}
                           />
                        </li>
                     </div>
                  </ul>

                  <div className='flex items-center justify-center mt-8 mb-8'>
                     <CountdownTimer timer={pomodoro} animate={startAnimate} />
                  </div>

                  <div className='flex justify-center items-center gap-4 mt-4'>
                     <Button
                        title='Start'
                        className={`${
                           !startAnimate ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-500 hover:bg-gray-600'
                        } text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300`}
                        _callback={startTimer}
                     />
                     <Button
                        title='Pause'
                        className={`${
                           startAnimate ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-500 hover:bg-gray-600'
                        } text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300`}
                        _callback={pauseTimer}
                     />
                  </div>

                  <div className='flex items-center justify-center mt-4'>
                     <Button
                        title='Settings'
                        className='bg-gray-700 hover:bg-orange-500 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full transition duration-300'
                        _callback={toggleSetting}
                     />
                  </div>
               </>
            )}
         </div>
      </div>
   );
}

export default App;
