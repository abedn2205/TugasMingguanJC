import logo from './logo.svg';
import './App.css';
import {data} from './Json/Data'
import Checkbox from './Tugas/Checkbox'
import RadioButton from './Tugas/RadioButton'
import TextArea from './Tugas/TextArea'

function App() {
  return (
    <form>
      {data.map((nilai,value)=>{
        if(nilai.type ==="checkbox"){
          return <Checkbox data={nilai} no={value+1}/>  
        }else if(nilai.type === "radio"){
          return  <RadioButton data={nilai} no={value+1}/>
        }else if(nilai.type === "essay"){
          return <TextArea soal={nilai.soal} no={value+1}/>
        }
        
              
      })}
    </form>
  );
}

export default App;
