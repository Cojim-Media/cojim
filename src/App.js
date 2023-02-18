import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './navPages/about us/About';
import Sermons from './navPages/sermons/Sermons';
import Events from './navPages/events/Events';
import Logif from './navPages/logif/Logif';
import Media from './navPages/media/Media';
import Give from './navPages/give/Give';
import Local from './navPages/give/local/Local';
import Inter from './navPages/give/inter/Inter';
import Partner from './navPages/partner/Partner';
import Gallery from './navPages/galery/Gallery';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/sermon" exact element={<Sermons />} />
          <Route path="/events" exact element={<Events />} />
          <Route path="/logif" exact element={<Logif />} />
          <Route path="/media" exact element={<Media />} />
          <Route path="/give" exact element={<Give />} />
          <Route path="/local" exact element={<Local />} />
          <Route path="/inter" exact element={<Inter />} />
          <Route path="/partner" exact element={<Partner />} />
          <Route path="/gallery" exact element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
