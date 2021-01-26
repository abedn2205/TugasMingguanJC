import React, { Component } from 'react'
import './App.css';
import {data} from './Json/Data'
import Checkbox from './Tugas/Checkbox'
import RadioButton from './Tugas/RadioButton'
import TextArea from './Tugas/TextArea'


export default class App extends Component {

  constructor(props){
    super(props)

    this.state = {jawabanSoal:[]}
  }

  addJawaban =(jawaban)=>{
    let tempJawab = this.state.jawabanSoal;
    tempJawab.push(jawaban);

    this.setState({jawabanSoal:jawaban})
  }




  render() {
    return (
      <form>
      {data.map((nilai,value)=>{
        if(nilai.type ==="checkbox"){
          return <Checkbox data={nilai} no={value+1} key={value}/>  
        }else if(nilai.type === "radio"){
          return  <RadioButton data={nilai} no={value+1} key={value}/>
        }else if(nilai.type === "essay"){
          return <TextArea soal={nilai.soal} no={value+1} key={value}/>
        }
        
              
      })}
    </form>
    )
  }
}