import './App.css';
import UploadedScreen from './components/UploadedScreen';
import UploadingScreen from './components/UploadingScreen';
import UploadScreen from './components/UploadScreen';
import { useAppContext } from './context';

function App() {
  const appCtx = useAppContext();
  return (
    <>
      {appCtx.state ==='upload' && <UploadScreen/>}
      {appCtx.state === 'uploading' && <UploadingScreen/>}
      {appCtx.state === 'uploaded' && <UploadedScreen url={appCtx.url}/>}
    </>
  );
}

export default App;
