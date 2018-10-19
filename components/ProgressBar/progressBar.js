import React, { PropTypes } from 'react';
import './progressBar.css';

class ProgressBar extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        percentage: this.props.percentage
      }
    }
    
    render() {
      return (
        <div> 
          <ProgressBarFeature percentage={this.state.percentage} />
        </div>
      )
    }
  }
  
  const ProgressBarFeature = (props) => {
    return (
      <div className="progress-bar">
        <Filler percentage={props.percentage} />
      </div> 
    )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }

  export default ProgressBar;