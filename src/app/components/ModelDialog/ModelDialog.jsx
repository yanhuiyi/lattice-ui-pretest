import React, {Component} from "react";
import "./ModelDialog.scss";

class ModelDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: props.message
        };
    }

    static show() {
        document.getElementById('productDetail').style.display = "block";
        document.getElementById('overlay').style.display = "block";
    }

    static hide() {
        document.getElementById('productDetail').style.display = "none";
        document.getElementById('overlay').style.display = "none";
    }

    render() {
        return (
            <div>
                <div id="overlay" className="overlay"><h3 id="closeDialog" onClick={ event => {
                    document.getElementById('productDetail').style.display = "none";
                    document.getElementById('overlay').style.display = "none";
                }}>X</h3></div>
                <div id="productDetail" className="modal">
                    <p className="dialogBody">{this.props.message}</p>
                </div>
            </div>
        )
    }
}

export default ModelDialog;