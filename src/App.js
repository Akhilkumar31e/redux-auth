import logo from './logo.svg';
import './App.css';
import configStore from './store/configureStore';
import { userLoggedIn, userLoggedOut } from './store/auth';

const store = configStore();

store.dispatch({type: 'makeAPICall', payLoad: {
  url: '/login',
  method: 'POST',
  data: {},
  onSuccess: userLoggedIn.type,
  onError: userLoggedOut.type
}});

console.log(store.getState());

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
