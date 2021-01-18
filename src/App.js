import logo from './logo.svg';
import './App.css';
import configStore from './store/configureStore';
import { userLoggedIn, userLoggedOut, logInUserWithEmail } from './store/auth';
import { apiCallRequested } from './store/authAPI';

const store = configStore();

store.dispatch(logInUserWithEmail('',''));

console.log(store.getState());

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
