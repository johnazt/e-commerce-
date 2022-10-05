import React from 'react';
import '../styles/product.loading.css'

const ProductLoading = () => {
    return (
        <div className='container-loader'>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    );
};

export default ProductLoading;