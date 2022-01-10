import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage, SignUpPage, HabitsPage, HistoryPage, TodayPage } from './pages';
import { createGlobalStyle } from 'styled-components';
import { Header, Footer } from './components';
import UserProvider from './contexts/userContext'; 
import HabitsProvider from './contexts/habitsContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <UserProvider>
          <HabitsProvider>
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='/cadastro' element={<SignUpPage />} />
              <Route path='/habitos' element={
                <>
                  <Header />
                  <HabitsPage />
                  <Footer />
                </>
              }/>
              <Route path='/historico' element={
                <>
                  <Header />
                  <HistoryPage />
                  <Footer />
                </>
              } />
              <Route path='/hoje' element={
                <>
                  <Header />
                  <TodayPage />
                  <Footer />
                </>
              } />
            </Routes>
          </HabitsProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  :root {
    --lightBlue: #52B6FF;
    --darkBlue: #126BA5;
    --generalFont: 'Lexend Deca', sans-serif;
  }

  body {
    font-family: var(--generalFont);
  }

  a {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    text-decoration-line: underline;
    
    color: var(--lightBlue);
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .wrapper {
    display: flex;
    justify-content: flex-end;
    padding: 0 16px;
    gap: 23px;
  }
`;