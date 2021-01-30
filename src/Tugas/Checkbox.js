import React, { Component } from 'react'

export default class Checkbox extends Component     {
    constructor(props){
        super(props)

        this.state = {jawaban:[]}
    }

    //fungsi yg digunakan ketika checkbox di kilk diambil dari name
    eventHandler = (event) =>{
        if(event.target.checked){
            this.addDataJawaban(event.target.value);
        }else{
            this.removeDataJawaban(event.target.value);
        }
    }

    addDataJawaban = (nilai)=>{
        let jawab = this.state.jawaban;
        jawab.push(nilai);
        this.setState({jawaban:jawab})
        this.addScore(jawab)
    }

    removeDataJawaban = (nilai)=>{
        let jawab = this.state.jawaban.filter((value)=>{
            return value !== nilai
        })
        this.setState({jawaban:jawab})
        this.addScore(jawab)
    }

    addScore = (jawab)=>{ 

        this.props.funjJawab({
            soal_no : this.props.no,
            jawaban : jawab
        });
    }
    



    render() {
        return (
            <div>
                <label>{this.props.no}. {this.props.data.soal}</label><p></p>
                {this.props.data.option.map((options, value)=>{
                    return <div className="form-check" key={value}>
                    <input className="form-check-input" type="checkbox" value={options} id={"soal"+this.props.no} name={"soal"+this.props.no} onChange={this.eventHandler} />
                    <label className="form-check-label" for="defaultCheck1">
                       {options}
                    </label>
                </div>
                })}
                <p>Jawaban Adalah: {this.state.jawaban.map((options)=>`${options}, `)}</p>
                
            </div>
        )
    }
}
