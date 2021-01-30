import React, { Component } from 'react'
import './App.css';
import {data} from './Json/Data'
import Checkbox from './Tugas/Checkbox'
import FormPertanyaan from './Tugas/FormPertanyaan';
import RadioButton from './Tugas/RadioButton'
import TextArea from './Tugas/TextArea'


export default class App extends Component {

  constructor(props){
    super(props)

    this.state = {jawabanSoal:[], score: 0, hasilJawabanSoal:[] }
  }

  addJawaban =(jawaban)=>{
    let newJawaban = this.state.jawabanSoal.filter((value)=>{return value.soal_no !== jawaban.soal_no })

      newJawaban.push(jawaban);
 
    // this.setState({jawabanSoal:newJawaban})

    let hasilJawaban = this.kalkulasiNilai(newJawaban);
    this.setState({jawabanSoal: newJawaban, hasilJawabanSoal: hasilJawaban});
  }

  kalkulasiNilai =(jawaban)=>{
    let tempHasilJawab = [];
    let booleanJawab = ""
    jawaban.map((jawab)=>{

      switch (data[jawab.soal_no - 1]. type){

        case "radio":
        case "essay":
          if (jawab.jawaban === data[jawab.soal_no - 1].kunci){
            booleanJawab = "benar"
          }else {
            booleanJawab = "salah"
          }

          break;

          case "checkbox":
            if (this.equalsIgnoreOrder(jawab.jawaban, data[jawab.soal_no - 1]. kunci)){
              booleanJawab = "benar"
            }else {
              booleanJawab = "salah"
            }

            break;
      }
      tempHasilJawab.push({
        "soal_no": jawab.soal_no,
        "hasil": booleanJawab
      })
      booleanJawab = ""
    })
    return tempHasilJawab;
  }

  equalsIgnoreOrder = (a, b)=>{
    if (a.length !== b.length) return false;
    const uniqueValues = new Set([...a, ...b]);
    for (const v of uniqueValues){
      const aCount = a.filter(e => e === v). length;
      const bCount = b.filter(e => e === v). length;
      if (aCount !== bCount)return false;
    }
    return true;
  }






  render() {
    return (
      <div>
        <div class="container">
        <div class="row">
          <div class="col-sm">
            <form>
              <p>Form Soal</p>
              {data.map((nilai,value)=>{
                if(nilai.type ==="checkbox"){
                  return <Checkbox data={nilai} no={value+1} key={value} funjJawab = {this.addJawaban}/>  
                }else if(nilai.type === "radio"){
                  return  <RadioButton data={nilai} no={value+1} key={value} funjJawab = {this.addJawaban}/>
                }else if(nilai.type === "essay"){
                  return <TextArea soal={nilai.soal} no={value+1} key={value} funjJawab = {this.addJawaban}/>
                }
                
                      
              })}
            </form>
          </div>

        <div className="col-sm">
            <div className="sticky-top">
              {/* <p>Isi Jawaban = {JSON.stringify(this.state.hasilJawabanSoal)}</p> */}
              <FormPertanyaan/>
            </div>
        </div>
  </div>
</div>

    </div>
    )
  }
}