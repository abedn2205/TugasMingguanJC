import React, { Component } from 'react'

export default class Checkbox extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <label>{this.props.no}. {this.props.data.soal}</label><p></p>
                {this.props.data.option.map((options, value)=>{
                    return <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" for="defaultCheck1">
                       {options}
                    </label>
                </div>
                })}
            </div>
        )
    }
}
