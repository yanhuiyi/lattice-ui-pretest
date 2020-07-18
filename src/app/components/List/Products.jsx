import React, { Component } from "react";
import Product from "../Product/Product";
import { Consumer } from "../Board/BoardContext";

class Products extends Component {
    constructor(props) {
        super(props);
    }

    _groupBy(list, prop) {
        let group = list.reduce((r, a) => {
            r[a.prop] = [...r[a.prop] || [], a];
            return r;
        }, {});

        return group;
    }

    // async fetchProduct(params) {
    //     const response = await fetchProducts();
    // }

    render = () => {
        return (
            <div>
                <Consumer>
                    {
                        value =>
                            <div>
                                {Object.keys(value.data).map((key, index) => <Product key={key} category={key} product={value.data[key]}></Product>)}
                            </div>
                    }
                </Consumer>
            </div>
        )
    };
}

export default Products;