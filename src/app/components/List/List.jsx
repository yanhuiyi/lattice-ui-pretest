import React, {Component} from "react";
import ListHeader from "./ListHeader";
import Products from "./Products";
import { Provider } from '../Board/BoardContext';
import fetchProducts from "../../../service/MockProductApiClient";
import './List.scss';

class List extends Component {
    constructor() {
        super();
        this.products = [];
        this.filteredProducts = [];
        this.keywordChangeHandler = this.keywordChangeHandler.bind(this);
        this.inStockChangeHandler = this.inStockChangeHandler.bind(this);

        this.state = {
            data: {},
            keyword: "",
            inStock: false,
            setKeyword: this.keywordChangeHandler,
            setInStock: this.inStockChangeHandler
        }
    }

    setStateProducts() {
        let products = this.filteredProducts.reduce((r, a) => {
            r[a.category] = [...r[a.category] || [], a];
            return r;
        }, {});
        this.setState({
            data: products
        })
    }

    filterProudctsByState(keyword, inStock) {
        if (keyword === "") {
            this.filteredProducts = this.products;
        } else {
            this.filteredProducts = this.products.filter((product) => {
                return (product.name || "").toLowerCase().includes(keyword.toLowerCase());
            });
        }
        if(inStock) {
            this.filteredProducts = this.filteredProducts.filter((product) => {
                return product.inStock;
            });
        }
    }

    keywordChangeHandler(event) {
        let keyword = event.target.value || "";
        let inStock = this.state.inStock;

        this.setState({
            keyword: keyword
        });
        
        this.filterProudctsByState(keyword, inStock);

        this.setStateProducts();
    }

    inStockChangeHandler(event) {
        let inStock = Boolean(event.target.value || "");
        let keyword = this.state.keyword;

        this.setState({
            inStock: inStock
        });
        
        this.filterProudctsByState(keyword, inStock);

        this.setStateProducts();
    }
  
    componentDidMount() {
        fetchProducts()
        .then(response => {this.products = response; this.filteredProducts = response; this.setStateProducts();})
    }

    render = () => {
        let isEmpty = Object.keys(this.state.data).length === 0;
        let child;
        if(isEmpty) {
            child = <p className="noProducts"><b>No products found.</b></p>
        } else {
            child = <Products></Products>
        }
        return (
            <div className="list">
                <Provider value={this.state}>
                        {
                            <div>
                                <ListHeader></ListHeader>
                                {child}
                            </div>
                        }
                    </Provider>
            </div>
        ); 
    };
}

export default List;