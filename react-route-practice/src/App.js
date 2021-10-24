import React, { Suspense } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';
// import NotFound from './pages/NotFound.js/NotFound';
// import QuoteDetail from './pages/quote-detail/QuoteDetail';
// import QuoteDetail from './pages/quote-detail/QuoteDetail';
// import NewQuote from './pages/new-quote/NewQuote';
const NewQuote = React.lazy(() => import('./pages/new-quote/NewQuote'));
const Quotes = React.lazy(() => import('./pages/quotes/Quotes'));
const NotFound = React.lazy(() => import('./pages/NotFound.js/NotFound'));
const QuoteDetail = React.lazy(() => import('./pages/quote-detail/QuoteDetail'));

const fallback = (
  <div className="centered">
    <LoadingSpinner />
  </div>
);

function App() {
  return (
    <Layout>
      <Suspense fallback={fallback}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact >
            <Quotes />
          </Route>
          <Route path="/quotes/:id">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote" exact>
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
