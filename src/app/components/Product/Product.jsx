import React, {Component} from "react";
import "./Product.scss";

class Product extends Component {
    constructor(props) {
        super();
        this.state = {

        };
    }

    handleClick = event => {
        const { productName, id } = event.target;

    }

    render() {
        const products = this.props.product.map((product) => 
            <ul key={product.id} className="product">
            <li>{product.name}</li>
            <li>{product.price}</li>
            <li><button onClick={event=> {
                this.handleClick(event);
            }}>View detail</button></li>
            </ul>
            );
        return (
            <div>
                <label>{this.props.category}</label>
                {products}
            </div>
        );
    }
}

export default Product;