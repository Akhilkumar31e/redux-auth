import logo from './logo.svg';
import './App.css';
import configStore from './store/configureStore';
import { userLoggedIn, userLoggedOut } from './store/auth';
import { apiCallRequested } from './store/authAPI';

const store = configStore();

store.dispatch(apiCallRequested({
  url: '/login',
  onSuccess: userLoggedIn.type,
  onError: userLoggedOut.type
}));

console.log(store.getState());

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
