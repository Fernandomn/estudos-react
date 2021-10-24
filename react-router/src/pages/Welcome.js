import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>Página inicial</h1>
      <Route path="/welcome/new-user">
        <p>Bem vindo, novo usuário!</p>
      </Route>
    </section>
  );
};

export default Welcome;
