//CASO 1  - ESTILO LOCAL

import styled from 'styled-components';
//A estilização só fica nesse componente


//usando a biblioteca de css styled;
const Title = styled.h1`
color:#8257e6;
`

export function App() {
  return (
    <div className="App">
      <Title>Hello world</Title>
    </div>
  );
}



