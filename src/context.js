import React, { Component } from 'react'

const ProductContext = React.createContext(); //context object created
//Provider
//Consumer


 class ProductProvider extends Component {
    render() {
        return (
            <ProductContext.Provider value="hello mehn">
               {this.props.children} 
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};