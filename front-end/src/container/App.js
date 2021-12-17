

import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import ProgressApi from '../shared/ProgressApi';
import { Col, Row } from 'react-bootstrap';
function App() {//Higher Order Component model should be use for ApiProgress but I cant find it how rfc HoC impl
  return (
    <div className="App">
      <Row>
        <Col>
        <ProgressApi>
        <LoginPage />
        </ProgressApi>
        </Col>
        <Col>
        <ProgressApi>
        <SignUpPage />
        </ProgressApi>
        </Col>
      </Row>
      
      
    </div>
  );
}

export default App;
