import React, {Component} from "react";
import "./Product.scss";
import "../ModelDialog/ModelDialog";
import { Consumer } from "../Board/BoardContext";

class Product extends Component {
    constructor(props) {
        super();
        this.state = {
            name: ""
        };
    }

    render() {
        let products = this.props.product.map(product => {
            let shouldHighlight = /basketball|iphone 6/i.test(product.name);
            let productItem;

            if(shouldHighlight) {
                productItem = <li className="name highlight">{product.name}</li>
            } else {
                productItem = <li className="name">{product.name}</li>
            }

            return (<ul key={product.id} className="product">
                {productItem}
                <li className="price">{product.price}</li>
                <Consumer>
                    {
                        value =>
                        <li className="detail">
                            <button onClick={event=> { value.handleModelDialog(product.name);}}>View detail</button>
                        </li>
                    }
                </Consumer>
                </ul>)
        });
        return (
            <div>
                <label className="category"><b>{this.props.category}</b></label>
                {products}
            </div>
        );
    }
}

export default Product;