import React, { Component } from 'react'

export default class RadioButton extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <label>{this.props.no}. {this.props.data.soal}</label>

                <div className="form-check">
                <input className="form-check-input" type="radio" name={"soalradio"+this.props.no} id={"soalradio"+this.props.no} />
                <label className="form-check-label" htmlFor={"soalradio"+this.props.no}>
                     {this.props.data.a}
                </label>
                </div>

                <div className="form-check">
                <input className="form-check-input" type="radio" name={"soalradio"+this.props.no} id={"soalradio"+this.props.no} />
                <label className="form-check-label" htmlFor={"soalradio"+this.props.no}>
                     {this.props.data.b}
                </label>
                </div>

                <div className="form-check">
                <input className="form-check-input" type="radio" name={"soalradio"+this.props.no} id={"soalradio"+this.props.no}/>
                <label className="form-check-label" htmlFor={"soalradio"+this.props.no}>
                     {this.props.data.c}
                </label>
                </div>

                <div className="form-check">
                <input className="form-check-input" type="radio" name={"soalradio"+this.props.no} id={"soalradio"+this.props.no} />
                <label className="form-check-label" htmlFor={"soalradio"+this.props.no}>
                     {this.props.data.d}
                </label>
                </div>

            </div>
        )
    }
}
