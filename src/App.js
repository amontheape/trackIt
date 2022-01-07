import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage, SignUpPage, HabitsPage } from './pages';
import UserProvider from './contexts/userContext'; 

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path='/' element={ <LoginPage /> } />
          <Route path='/cadastro' element={ <SignUpPage /> } /> 
          <Route path='/habitos' element={ <HabitsPage /> } />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
