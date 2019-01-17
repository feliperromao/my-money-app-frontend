import React from 'react'

import ContentHeader from '../commons/template/ContentHeader'
import Content from '../commons/template/Content'

class Dashboard extends React.Component{
  render(){
    return(
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0.0" />
        <Content>
          Dashboard
        </Content>
      </div>
    )
  }
}

export default Dashboard