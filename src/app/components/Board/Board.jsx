import React, {Component} from "react";
import List from "../List/List";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }

    componentDidMount() {
    }

    // async fetchProduct(params) {
    //     const response = await fetchProducts();
    // }

    render = () => {
        const { data } = this.state;

        return (
            <List></List>
        );
    };
}

export default Board;