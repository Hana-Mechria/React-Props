
import './App.css';
import Profile from './profile/Profile';



function App() { 
  
 const handleName= (full)=>{alert(full)}; 
  const users={full : "Hana Mechria", bio:"My bio", profession:"Developer", imge:'https://etreparents.com/wp-content/uploads/2018/12/professeur.jpg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe'}
  return (
    <div className="App">
     
      <Profile fullname ={users.full} bio={users.bio} profession={users.profession} image={users.imge} handleName={handleName}/>
    </div>
  );
}

export default App;
