import './App.css';
import List from './Components/List';
import store from './Redux/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <List />
      </div>
    </Provider>
  );
}

export default App;