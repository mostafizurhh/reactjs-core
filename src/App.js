import logo from './logo.svg';
import './App.css';
/************* create style *************/
const style1 = { color: 'red' }

/************* create object *************/
const movie = { name: 'DDLJ', nayok: 'SRK', naika: 'KAJOL' }

/************* create array of object *************/
const movies = [
  { name: 'DDLJ', nayok: 'SRK', naika: 'KAJOL' },
  { name: 'KKKG', nayok: 'SRK', naika: 'KAJOL' },
  { name: 'KKHH', nayok: 'SRK', naika: 'KAJOL' },
  { name: 'KA', nayok: 'SRK', naika: 'KAJOL' }
]

function App() {
  /********** simple array *******/
  const nayoks = ['Salman', 'Riaz', 'Alomgir', 'Razzak', 'Faruk', 'Manna']
  return (
    <div>
      {/******** must use '{}' inside div for using dynamic values such as performing map operation *******/}

      {/* <Nayok name={nayoks[0]}></Nayok>
      <Nayok name={nayoks[1]}></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
      <Nayok name={nayoks[3]}></Nayok> */}

      {/******** dynamicly show array elements as list item *******/}
      {nayoks.map(nayok => <li>{nayok}</li>)}

      {/******** dynamicly show array elements using component *******/}
      {nayoks.map(nayok => <Nayok name={nayok}></Nayok>)}

      {/******** dynamicly show array of object elements using component *******/}
      {movies.map(movie => <Nayok name={movie.name}></Nayok>)}
    </div>
    // <div>
    //   {/********************* use component ***************/}
    //   <Family1></Family1>

    //   {/************** create attribute in component **************/}
    //   <Family name="Rasal" age="32" gender="Male"></Family>
    //   <Family name="Romel" age="29" gender="Male" ></Family>
    //   <Family name="Refat" age="22" gender="Male" ></Family>
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

    //     {/********** style rule 1 *************/}
    //     <h1 style={{ color: 'blue', backgroundColor: 'white', padding: 20, borderRadius: 10 }}>Wohooo!!!! emmet is working.</h1>

    //     {/********** style rule 2 *************/}
    //     <p className='paragraph'>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum impedit recusandae, provident ut deleniti, saepe laborum totam, inventore vero maiores exercitationem sit beatae? Dignissimos eaque at molestiae itaque quod maxime.
    //     </p>

    //     {/********** style rule 3 *************/}
    //     <p style={style1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempore soluta ipsa at odit deserunt a veritatis? Corrupti, alias ut.</p>

    //     {/************* access Object value dynamicly ***********/}
    //     <p>Movie: {movie.name}, {movie.nayok}, {movie.naika}</p>
    //   </header>
    // </div >
  );
}

/************************ Create Component ****************/
// function Family1() {
//   return (
//     <div className='paragraph'>
//       <h1>Name: My Family</h1>
//       <h2>Members: 3</h2>
//     </div>
//   )
// }

/************** Create Dynamic Component **************/
// function Family(props) {
//   return (
//     <div className='paragraph'>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <h2>{props.gender}</h2>
//     </div>
//   )
// }

function Nayok(props) {
  return (
    <div className='paragraph'>
      <h3>{props.name}</h3>
    </div>
  )
}
export default App;
