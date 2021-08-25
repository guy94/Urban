import React, { Component } from 'react';

class LayersCheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = { layers: this.props.layers,
                        }
        
    }

displayLayer = (e) =>{
    console.log(e)
    // console.log(layer)
    this.props.getLayer(e)
}

    render() { 

        return ( <>
                <ul style={{display: 'inline-block'}}>
                    {Object.keys(this.state.layers).map((key, index) => {
                        // {console.log(layer)}
                        return (
                            <>
                            <label key={index} class="form-check-label" for="flexCheckDefault">
                                
                                <input value={key} onChange={this.displayLayer} class="form-check-input" type="checkbox" id="flexCheckDefault"/>
                                {this.state.layers[key].name}
                            </label>
                            </>
                        )
                    })}
                </ul>
            </> );
    }
}
 
export default LayersCheckBox