import React from 'react'

import ContentHeader from '../commons/template/ContentHeader'
import Content from '../commons/template/Content'

class BillingCycles extends React.Component{
  render(){
    return(
      <div>
        <ContentHeader title="Ciclos de Pagamento" small="Versão 1.0.0" />
        <Content>
          Ciclos de Pagamento
        </Content>
      </div>
    )
  }
}


export default BillingCycles;