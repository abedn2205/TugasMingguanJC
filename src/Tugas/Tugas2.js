import React, { Component } from 'react'

export default class Tugas2 extends Component {
    state={
        soal1:[
            {
                "soal":"1. Siapakah penemu baling-baling bambu",
                "a":"Doraemon",
                "b":"Naruto",
                "c":"Nobita",
                "d":"Sasuke",
                "jawab":"a"
            }],
        soal2:[
            {
                "type":"checkbox",
                "soal":"Pilih 2 yang benar mengenai Agil",
                "option1":"Trainer Juaracoding",
                "option2":"Manusia",
                "option3":"Anggota Avengers",
                "jawab":["Manusia","Anggota Avengers"]
            }],
        soal3:[
            {
                "type":"essay",
                "soal":"Ceritakan pengalaman anda ketika sedang tidur"
            }]
        
    }

    render() {
        const hasil1 = this.state.soal1.map(function(data){
            let jawaban = "";
            if (data.jawab===data.a) {
                jawaban = <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
            }else{
                jawaban = <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"   />
            }
            
            return(
                <div>
                    <h6>{data.soal}</h6>  

                    <div className="form-check">
                    {jawaban}
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        {data.a}
                    </label>
                    </div>

                    <div className="form-check">
                    {jawaban}
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        {data.b}
                    </label>
                    </div>

                    <div className="form-check">
                    {jawaban}
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        {data.c}
                    </label>
                    </div>

                    <div className="form-check">
                    {jawaban}
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        {data.d}
                    </label>
                    </div>
                </div>
                )
        })

        const hasil2 = this.state.soal2.map(function(data){
            return <div>
                <h6>{data.soal}</h6>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        {data.option1}
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        {data.option2}
                    </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        {data.option3}
                    </label>
                </div>

            </div>
        })

        const hasil3 = this.state.soal3.map(function(data){
            return <div>
                <h6>{data.soal}</h6>

             <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
                <label htmlFor="floatingTextarea2">Comments</label>
            </div>

            </div>
        })

        
        return (
            <div>
               {hasil1}<br></br>
               {hasil2}<br></br>
               {hasil3}
        </div>     
        )
    }
}