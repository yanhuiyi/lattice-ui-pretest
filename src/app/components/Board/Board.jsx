import React, {Component} from "react";
import List from "../List/List";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    componentDidMount() {
    }

    render = () => {

        return (
            <List></List>
        );
    };
}

Board.contextType = React.createContext();

export default Board;