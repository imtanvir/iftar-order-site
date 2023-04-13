import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Shop from './Components/Shop/Shop';
function App() {
  return (
    <div className="App">
      <div className="position-sticky bg-primary" style={{height:'10vh'}}>
        <h1 className='text-center text-white py-3'>Ramadan Iftari</h1>
      </div>
      {/* Shop items */}
      <Shop></Shop>
    </div>
  );
}

export default App;
