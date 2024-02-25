import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import { getCookie } from './utils/Cookie';


const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = getCookie("session_id");
    if (sessionId == undefined) {
      console.log("navigate");
      navigate("/login");
    }

  }, []);

  return (
    <div>
      <p>메인</p>
      <Link to="/login">로그인</Link>
      <Link to="/test">테스트</Link>
    </div>
  )
}

export default App
