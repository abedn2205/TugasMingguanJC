import React, { Component } from 'react'

export default class FormPertanyaan extends Component {
    constructor(props){
        super(props)

        this.state = {
            typeSoal:"",
            soal:[]
                    
            }

            
        
    }

    eventHandler = (type, value)=>{
        alert(value)
      if(type === "radio"){
          return ("ini adalah radio")
      }else if(type ==="checkbox"){
          return("ini adalah checkbox")
      }else{
          return("ini adalah essay")
      } 

    }



    submitCode = (data)=>{
        let soal = document.getElementById("soal").value
        let jawabA = document.getElementById("A").value
        let jawabB = document.getElementById("B").value
        let jawabC = document.getElementById("C").value
        let jawabD = document.getElementById("D").value
        let kunci = document.getElementById("kunci").value
        let skor = document.getElementById("skor").value
        
    }
    

       

    

    render() {
        return (
            <form>
            <p>Form Pertanyaan</p>
            <container className="container-lg mb2"  >
                <select  className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={this.eventHandler}>
                    <option selected>Open this select menu</option>
                    <option value="radio">Radio</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="essay">TextArea</option>
                </select>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               <div className="">
                    <label htmlFor="soal" className="form-label sm-col">Soal</label>
                    <input type="text" className="form-control" id="soal" name="soal"  />
                </div>
                <br></br>
                <div className="">
                    <label htmlFor="A" className="form-label sm-col">Jawab A:</label>
                    <input type="text"  className="form-control" id="A" name="A"   />
                </div>
                <br></br>
                <div className="">
                    <label htmlFor="B" className="form-label sm-col">Jawab B:</label>
                    <input type="text" className="form-control" id="B" name="B"  />
                </div>
                <br></br>
                <div className="">
                    <label htmlFor="C" className="form-label sm-col">Jawab C:</label>
                    <input type="text" className="form-control" id="C" name="C"  />
                </div>
                <br></br>
                <div className="">
                    <label htmlFor="D" className="form-label sm-col">Jawab D:</label>
                    <input type="text" className="form-control" id="D" name="D"  />
                </div>
                <br></br>
                <div className="">
                    <label htmlFor="kunci" className="form-label sm-col">Kunci :</label>
                    <input type="text" className="form-control" id="kunci" name="kunci"  />
                </div>
                <br></br>
                <div className="">
                    <label htmlFor="skor" className="form-label sm-col">Skor :</label>
                    <input type="text" className="form-control" id="skor" name="skor"  />
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary" onClick={this.submitCode} >Submit</button>
                

            </container>
       
        </form>
        )
    }
}
