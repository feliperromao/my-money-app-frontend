import React from 'react'

import ContentHeader from '../commons/template/ContentHeader'
import Content from '../commons/template/Content'
import ValueBox from '../commons/widget/ValueBox'
import Row from '../commons/layout/Row'

class Dashboard extends React.Component{
  render(){
    return(
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 6 4"
              color="green"
              value="R$ 10"
              text="Total de Créditos"
              icon="fa fa-bank"
            />
            <ValueBox
              cols="12 6 4"
              color="red"
              value="R$ 10"
              text="Total de Débitos"
              icon="fa fa-credit-card"
            />
            <ValueBox
              cols="12 6 4"
              color="blue"
              value="R$ 0"
              text="Valor Consolidado"
              icon="fa fa-money"
            />

          </Row>
        </Content>
      </div>
    )
  }
}

export default Dashboard