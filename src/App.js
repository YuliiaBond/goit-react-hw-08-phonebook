import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { getCurrentUser } from './redux/auth';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    }, [dispatch]);

  return (
    <Container>
      <AppBar />

        <Suspense fallback={<h2>Loading...</h2>}>
          
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute path="/register" component={RegisterView} />
            <PublicRoute path="/login" component={LoginView} />
            <PrivateRoute path="/contacts" component={ContactsView} />
          </Switch>

        </Suspense>
        
    </Container>
  )
};