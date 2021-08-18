import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperatios.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>

      {/* <h1>Phonebook</h1>

      <Form />

      <h2>Contacts</h2>

      <Filter />

      <Contacts /> */}
        
    </Container>
  )
};