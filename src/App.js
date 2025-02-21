import './App.css';
import TextToSpeech from './Components/TextToSpeech/TextToSpeech';
import { showInfoToast, ToastNotifications } from './Components/ToastMessage/ToastMessageComponent';
import useIdleTimer from './hook/useIdleTimer';
import {useEffect} from "react"
import AppLayout from './Layout/AppLayout';
import { useAuth } from './Context/AuthContext';
function App() {
  const {isAuthenticated,logout} = useAuth();
  const { startTimer, stopTimer } = useIdleTimer(handleLogout, 1800000);
  function handleLogout ()  {
      logout();
      showInfoToast("Session expired due to inactivity");
  };
  useEffect(() => {
    if (isAuthenticated) {
      startTimer();
    } else {
      stopTimer(); 
    }
  }, [isAuthenticated, startTimer, stopTimer]);
  
  return (
    <div >
      {/* <TextToSpeech/> */}
      <ToastNotifications/>
        <AppLayout/>
    </div>
      
  );
}

export default App;
