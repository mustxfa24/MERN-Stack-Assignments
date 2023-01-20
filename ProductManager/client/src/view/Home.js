import React, { useState } from 'react';
import Form from '../components/Form';
import ProductList from '../components/ProductList';

const Home = (props) => {

    const [productList, setProductList] = useState([]);

    const removeFromDom = productId => {
        setProductList(productList.filter(product => product._id !== productId))
    }

    return (
        <div>
            <Form
                productList={ productList }
                setProductList={ setProductList }
                />

            <ProductList
                productList={ productList }
                setProductList={ setProductList }
                removeFromDom={ removeFromDom }
                />
        </div>
    );
};

export default Home;