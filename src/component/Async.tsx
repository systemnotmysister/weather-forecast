import React, { Component } from 'react';
import { render } from 'react-dom';

export const apiKey = 'cb4a1782dbd75c2ffdde3b033b2752ee'


  class GetData extends Component<{id:number}> { 
  constructor(props: any) {
      super(props);
    this.state = {
  loading: false
}
}

 async componentDidMount() {
   console.log('fetching started...')
  this.setState({loading: true})
        try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${this.props.id}&appid=${apiKey}`)
        const data = await response.json()
        this.state = {data}
    } catch (e) {
        console.error(e) 
    }
}
  
    render() {
      if (this.state.loading || !this.state.data)
      { 
        return 'loading...'
      }
      else {
      return (
        <div>
          <ul>
              <li>
                {this.state.data.name}
                {this.state.data.visibility}
                {this.state.data.temp}
             </li>
          </ul>
       </div>
      )}
    }
  }

export default GetData;
 


