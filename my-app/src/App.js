import React from 'react';
import axios from "axios";

class AgeCalculator extends React.Component {
  state = { response : ""};
  render() {
    return (
      <div id="container">
        <center>
          <table>
            <thead>
              <tr>
                <th colSpan={2}><h2>Age Calculator</h2></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span>Enter Date of birth </span></td>
                <th>
                  <input ref={(r) => this.dob = r} type="date" />
                </th>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button onClick={this.calculateAge}>Calculate age</button>
                </td>
              </tr>
              <tr>
                <td colSpan={2}><div className="result">{this.state.response}</div></td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    );
  }

  calculateAge = () => {

    axios.post('http://localhost:8085/app/v1/calculateAge', {
      "dob": this.dob.value
    })
    .then(res => {
      console.log(res.data);
      const response = res.data
      this.setState({response: response});
    }).catch(err => {
      console.log(err);
    })
    
  };
}

export default AgeCalculator;