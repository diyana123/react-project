import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import './App.css';
import Cards from './Components/cards/Cards';
import Footer from './Components/footer/Footer';
import Letters from './Components/letters/Letters';
import SignInForm from './Components/sign-in/SignInForm';
import Header from "./Header/Header";



const App =() => {
  return (
   <Router>
<Routes>
<Route path="/" element={  <Header/>}>
<Route path="/signIn" element={ <SignInForm/>} />
     </Route>
</Routes>
     
  
    <Cards/>
    <Letters/>
    <Footer />
   </Router>
  );
}

export default App;
