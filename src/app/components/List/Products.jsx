import React, { Component } from "react";
import Product from "../Product/Product";
import fetchProducts from "../../../service/MockProductApiClient";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    _groupBy(list, prop) {
        let group = list.reduce((r, a) => {
            r[a.prop] = [...r[a.prop] || [], a];
            return r;
        }, {});

        return group;
    }

    componentDidMount() {
        fetchProducts()
        .then(response => this.setState({
            data: response.reduce((r, a) => {
                r[a.category] = [...r[a.category] || [], a];
                return r;
            }, {})
        }));
    }

    // async fetchProduct(params) {
    //     const response = await fetchProducts();
    // }

    render = () => {
        const { data } = this.state;

        return (
            <div>
                {Object.keys(data).map((key, index) => <Product key={key} category={key} product={data[key]}></Product>)}
            </div>
        )
    };
}

export default Products;