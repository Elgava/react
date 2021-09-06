import React from 'react';


export default function ProductList() {
    const products = ["Learning React","Pro React","Beginning React"];
    const listProducts = products.map((product) => 
        <List key={product.toString()}>            
            <p>{product}</p>
        </List>
    );

  return (
    <Container>
        <Header />
        <Content>
        <List>
            {listProducts}
        </List>
        </Content>
    </Container>

  );
}

export default products;