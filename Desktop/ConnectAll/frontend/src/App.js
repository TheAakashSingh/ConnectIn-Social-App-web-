import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RightTopViewSection from './Components/RightSection/RightTopViewSection';
import Events from './pages/Events';
import HelpPage from './pages/HelpPage';
import Home from './pages/Home';
import Languages from './pages/Languages';
import LoginPage from './pages/LoginPage';
import Mate from './pages/Mate';
import NoPage from './pages/NoPage';
import PrivacySecurity from './pages/PrivacySecurity';
import Saved from './pages/Saved';
import Setting from './pages/Setting';
import SocialLink from './pages/SocialLink';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="blur1" style={{ top: '13rem', left: '-26px' }}></div>
        <div className="blur2" style={{ top: '13rem', left: '-51px' }}></div>
        <Routes>
          <Route path="/ConnectIn-Social-App-web-" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Events" element={<><RightTopViewSection /><Events /> </>} />
          <Route exact path="/Social Links" element={<><RightTopViewSection /><SocialLink /> </>} />
          <Route exact path="/Mates" element={<><RightTopViewSection /><Mate /> </>} />
          <Route exact path="/Saved" element={<><RightTopViewSection /><Saved /> </>} />
          <Route exact path="/Setting" element={<><RightTopViewSection /><Setting /> </>} />
          <Route exact path="/PrivacySecurity" element={<><RightTopViewSection /><PrivacySecurity /> </>} />
          <Route exact path="/LoginPage" element={<LoginPage />} />
          <Route exact path="/Help" element={<><RightTopViewSection /><HelpPage /> </>} />
          <Route exact path="/Languages" element={<><RightTopViewSection /><Languages /> </>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
