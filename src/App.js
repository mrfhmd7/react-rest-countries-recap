import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
        <Countries></Countries>
    </div>
  );
}

// function LoadCountries() { 
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [ ])
//   return (
//     <div>
//       <h1>All Countries of the World!!</h1>
//       <h3>Countries: {countries.length} </h3>
//       {
//         countries.map(country => console.log(country.name.common))
//       }
//     </div>
//   )
// }

export default App;
