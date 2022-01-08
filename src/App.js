import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage, SignUpPage, HabitsPage } from './pages';
import UserProvider from './contexts/userContext'; 
import HabitsProvider from './contexts/habitsContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <HabitsProvider>
          <Routes>
            <Route path='/' element={ <LoginPage /> } />
            <Route path='/cadastro' element={ <SignUpPage /> } /> 
            <Route path='/habitos' element={ <HabitsPage /> } />
          </Routes>
        </HabitsProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
