import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoutes from './pages/utils/PrivateRoutes';
import Overview from './pages/Overview';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import { useEffect } from 'react';
import { streamingAPI } from './services/streaming-sse';
import { autoLogin } from './store/auth-slice/auth-actions';
import { useAppDispatch } from './store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from './App.styled';
import { useResponsiveScreen } from './hooks/useResponsiveScreen';
import { ROOT_PATHS } from './resources/routes';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fn = () => {
      console.log('Hola');
    };
    dispatch(autoLogin(fn));

    return () => streamingAPI.closeConnections();
  }, [dispatch]);

  useResponsiveScreen();

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Overview />} path={ROOT_PATHS.overview} />
            <Route element={<Contacts />} path={ROOT_PATHS.contacts} />
          </Route>
          <Route element={<Login />} path={ROOT_PATHS.auth} />
          <Route element={<Login />} path={ROOT_PATHS.signUp} />
          <Route element={<PageNotFound />} path={ROOT_PATHS.notFound} />
          <Route element={<Navigate to={ROOT_PATHS.notFound} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
