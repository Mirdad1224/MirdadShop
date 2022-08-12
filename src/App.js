import routes from "./routes";
import {useRoutes} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useSelector} from 'react-redux'



function App() {

  const themeState = useSelector((state) => state.theme.isLight);

  let router = useRoutes(routes)

  
  return (
    <div className={themeState ? '' : 'darkRoot'}>
      <Navbar />
      {router}
      <Footer />
    </div>
  );
}

export default App;
