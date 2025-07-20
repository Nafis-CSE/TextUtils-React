import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Text from './component/Text';
import Alert from './component/Alert';
import About from './component/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState<{ type: string; msg: string } | null>(null);
  const [text,setText] = useState('');
 

  setTimeout(() => {
    setAlert(null);
  }, 2000);

  return (
    <>
      <Navbar textutils="TextUtils" setAlert={setAlert} />
      {alert && <Alert type = {alert.type} msg = {alert.msg} />}
      <div className="container my-3">

          <Routes >
            <Route path="/" element={<Text heading="Enter your text to analyse" text={text} setText={setText} setAlert={setAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
