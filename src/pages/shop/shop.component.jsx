import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopSections } from '../../redux/shop/shop.selectors.js';

const ShopPage = ({collections})=>(

        <div className='shop-page'>
            {
                collections.map(({id , ...otherCollectionProps}) =>(
                    <PreviewCollection  key={id} {...otherCollectionProps}/>
                ))
            }
        </div>)
    


const mapStateToProps = createStructuredSelector({
    collections : selectShopSections
})

export default connect(mapStateToProps) (ShopPage)