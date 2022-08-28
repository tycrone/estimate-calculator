import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    pages: "0",
    service: "0",
    partySize: "0",
    totalTip: "",
    tipPP: "",
    fedIMP: "",
    fedST: "",
    fedPP: "",
    contIMP: "",
    contST: "",
    contPP: "",
    qaST: "",
    qaPP: "",
    customFunc:"",
    accessibility:"",

  }

  handleInput(inputType, event) {
    switch (inputType) {
      case 'pages':
        this.setState({
          pages: event.target.value
        }, this.genEstimate)
        break;
      case 'service':
        this.setState({
          service: event.target.value
        }, this.genEstimate)
        break;
      case 'party':
        this.setState({
          partySize: event.target.value
        }, this.genEstimate)
        break;
      default:
        return;
    }

  }

  genEstimate = (event) => {
    // event.preventDefault();
    let total = parseFloat(this.state.pages * this.state.service).toFixed(2)
    // let totalTipPP = parseFloat(tip / this.state.partySize).toFixed(2)
    this.setState({
      totalTip: total,
      // tipPP: totalTipPP
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ESTIMATE CALCULATOR</h1>
          <label>
            Number of pages:
            <input type="text" value={this.state.total} onChange={(e) => this.handleInput('pages', e)} />
          </label>
          <label>
            Service:
            <input type="text" value={this.state.service} onChange={(e) => this.handleInput('service', e)} />
          </label>
          <label>
            Party Size:
            <input type="text" value={this.state.partySize} onChange={(e) => this.handleInput('party', e)} />
          </label>
          <input type="submit" />
          <p>~ FINAL QUOTE ~</p>
          <p>2.1 Implementation - FED: {this.state.fedIMP}</p>
          <p>3.1 System Testing - FED: {this.state.fedST}</p>
          <p>5.1 Pre-production - FED: {this.state.fedPP}</p>
          <p>2.2 Implementation - Content: {this.state.contImp}</p>
          <p>3.2 System Testing - Content: {this.state.contST}</p>
          <p>5.2 Pre-production - Content: {this.state.contPP} </p>
          <p>3.3 System Testing - QA: {this.state.qaST}</p>
          <p>5.3 Pre-production - QA: {this.state.qaPP}</p>
          <p>7.0 Custom Functionality: {this.state.customFunc}</p>
          <p>8.0 Accessibility: {this.state.accessibility}</p>

          <p>Implementation Estimate (hours): 000 </p>
          <p>Implementation Timeline (hours): 000 (0.0 weeks) </p>
      </div>
    );
  }
}

export default App;
