import React, { Component } from 'react';

class Resumo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultas: {
        consultas_30dias_anteriores: 0,
        consultas_30dias_posteriores: 0
      },
      faturamento: {
        anterior: {
          valor: 0,
          comparativo: 0
        },
        previsao: {
          valor: 0,
          comparativo: 0
        }
      }
    }
  }
  render() {
    return (
      <div className="col">
        <div className="card mt-2 text-center">
          <div className="card-header">
            30 dias anteriores
      </div>
          <div className="card-body">
            {
              this.state
                .consultas
                .consultas_30dias_anteriores
            }
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mt-2 text-center">
          <div className="card-header">
            Próximos 30 dias
      </div>
          <div className="card-body">
            {
              this.state
                .consultas
                .consultas_30dias_posteriores
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Resumo;