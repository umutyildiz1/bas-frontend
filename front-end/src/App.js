import logo from './logo.svg';
import './App.css';

import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ProgressApi from './shared/ProgressApi';
function App() {
  return (
    <div className="App">
      <ProgressApi>
        <LoginPage />
      </ProgressApi>
      
    </div>
  );
}

export default App;
