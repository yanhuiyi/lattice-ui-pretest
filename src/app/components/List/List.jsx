import React, {Component} from "react";
import ListHeader from "./ListHeader";
import Products from "./Products";


class List extends Component {


    render = () => {
        return (
            <div>
            <ListHeader></ListHeader>
            <Products></Products>
            </div>
        ); 
    };
}

export default List;