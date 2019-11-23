import React from "react";
import Product from "../src/components/product/index";
import "../src/components/product/style.css";

const productsJson = require("./product.json");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 id="header">Products</h1>
        </header>

        <div className="product-container">
          {productsJson.products.map((item: any) => {
            return (
              <Product
                key={item.id}
                name={item.name}
                image={item.image}
                type={item.type}
                substance={item.substance}
                size={item.size}
                numberInPack={item.numberInPack}
                price={item.price}
                deliveryTime={item.deliveryTime}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
