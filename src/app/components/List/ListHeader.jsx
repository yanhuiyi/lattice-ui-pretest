import React,{ Component } from "react";
import { Consumer } from "../Board/BoardContext";


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
                <h2>Products</h2>
                <Consumer>
                    {
                        value =>
                            <div>
                                <p><input type="text" value={value.keyword} onChange={value.setKeyword}></input></p>
                                <p><input type="checkbox" checked={value.inStock} onChange={value.setInStock}></input><label>In stock products only</label></p>
                            </div>
                    }
                </Consumer>
            </div>
        );
    }
}

export default ListHeader;