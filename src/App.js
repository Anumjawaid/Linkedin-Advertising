import AppRouter from './Routes';
import { store } from './Store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store} >
    <AppRouter />
    </Provider>
  );
}

export default App;
