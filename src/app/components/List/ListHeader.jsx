import React,{ Component } from "react";
import { Consumer } from "../Board/BoardContext";
import "./ListHeader.scss";

class ListHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleSubmit = () => {

    };

    render() {
        return (
            <div>
                <h2 className="header">Products</h2>
                <Consumer>
                    {
                        value =>
                            <div className="filter">
                                <p className="keyword"><input type="text" value={value.keyword} onChange={value.setKeyword} placeholder="Search products"></input></p>
                                <p className="inStock"><input type="checkbox" checked={value.inStock} onChange={value.setInStock}></input><label>In stock products only</label></p>
                            </div>
                    }
                </Consumer>
            </div>
        );
    }
}

export default ListHeader;