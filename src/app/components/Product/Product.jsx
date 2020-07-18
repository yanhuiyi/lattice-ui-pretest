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
            <li className="name">{product.name}</li>
            <li className="price">{product.price}</li>
            <li className="detail"><button onClick={event=> {
                this.handleClick(event);
            }}>View detail</button></li>
            </ul>
            );
        return (
            <div>
                <label className="category"><b>{this.props.category}</b></label>
                {products}
            </div>
        );
    }
}

export default Product;