import React, { Component } from 'react';

class Faturamento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detalhamento : []
    };
  }

  componentDidMount(){
    fetch("http://www.devup.com.br/php/api-dashboard/api/faturamento")
    .then(resultado => resultado.json().then(dados => this.setState(dados)));
  }
  
  render() {
    return (
      <div>
        <h2 className="mt-2">Faturamento</h2>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                Total por forma de pagamento
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default Faturamento;