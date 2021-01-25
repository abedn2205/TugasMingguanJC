import React, { Component } from 'react'

export default class TextArea extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">{this.props.no}. {this.props.soal}</label><p></p>
                    <textarea onChange={this.eventHandler} className="form-control" id={"soal"+this.props.no} name={"soal"+this.props.no} rows="3"></textarea>
                </div>
            </div>
        )
    }
}
