import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Text from './component/Text';
import Alert from './component/Alert';
import About from './component/About';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [alert, setAlert] = useState<{ type: string; msg: string } | null>(null);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    document.body.style.backgroundColor = isChecked ? 'white' : 'black';
    document.body.style.color = isChecked ? '#3618bbff' : 'white';
    setAlert({ type: isChecked ? 'success' : 'dark', msg: isChecked ? 'Light Mode Enabled!' : 'Dark Mode Enabled!' });
  };
  setTimeout(() => {
    setAlert(null);
  }, 2000);

  return (
    <>
      <Navbar textutils="TextUtils" isChecked={isChecked} handleToggle={handleToggle} />
      {alert && <Alert type = {alert.type} msg = {alert.msg} />}
      <div className="container my-3">

          <Routes>
            <Route path="/" element={<Text heading="Enter your text to analyse" isChecked={isChecked} setAlert={setAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
