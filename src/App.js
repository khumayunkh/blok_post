import { Route, Routes } from 'react-router-dom';
import Contacts from './component/Contact/Contacts';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Posts from './component/Posts/Post';

function App() {
  return (
    <div className="App">
      <Header/>
      <Posts/>
      <Routes>
      <Route
        path='/contacts'
        element={<Contacts/>}
      />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
