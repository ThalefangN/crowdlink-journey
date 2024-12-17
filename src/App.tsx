import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;