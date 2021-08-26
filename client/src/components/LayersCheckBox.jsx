import React, { Component } from 'react';

class LayersCheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            layers: this.props.layers,
        }
        
    }
/*
calls a parent method inorder to get the chosen layer
*/
displayLayer = (e) =>{
    this.props.getLayer(e);
    this.props.onCheckedChange();
}

    render() { 
        const {layers} = this.state;

        return ( <>
                <ul style={{display: 'inline-block'}}> 
                    <strong>:בחר שכבה להצגה</strong>
                    {Object.keys(this.state.layers).map((key, index) => {
                        return (
                            <div key={index} style={{marginTop: '5px'}}>
                                <label className="form-check-label" for="flexCheckDefault">
                                    <input value={key} style={{margin: '3px'}} onChange={this.displayLayer} className="form-check-input" type="checkbox" id="flexCheckDefault"/>
                                    {this.state.layers[key].name}
                                </label>
                            </div>
                        )
                    })}
                </ul>
            </> );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ layers: nextProps.layers });  
      }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }
}
 
export default LayersCheckBox