import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      {/* The child route's component will be rendered here */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
