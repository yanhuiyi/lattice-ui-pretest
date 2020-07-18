import React,{ Component } from "react";



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
                <p><input type="text"></input></p>
                <p><input type="checkbox"></input><label>In stock products only</label></p>
            </div>
        );
    }
}

export default ListHeader;