import logo from './logo.svg';
import './App.css';
import configStore from './store/configureStore';
import { logInUserWithEmail, signupUserWithEmail } from './store/firebaseAuth';

const store = configStore();

store.dispatch(signupUserWithEmail('rajatarun12@gmail.com','Bhaskar@1'));

setTimeout(()=>{
  store.dispatch(logInUserWithEmail('rajatarun12@gmail.com','Bhaskar@1'));
},2000);

console.log(store.getState());

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
