import React, {Component} from "react";
import List from "../List/List";

// export const {Provider, Consumer} = React.createContext();

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

        return (
            <List></List>
        );
    };
}

Board.contextType = React.createContext();

export default Board;