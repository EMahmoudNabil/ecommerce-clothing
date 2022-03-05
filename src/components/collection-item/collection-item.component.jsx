import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';


const collectionItem =({id,name,price,imageUrl})=>(
    <div className='collection-item'>
        <div 
        className='image'
        style={{
            backgroundImage : `url(${imageUrl})`
        }} />


       <div className='collection-footer'>
           <span className='name'>{name}</span>
           <span className='price'>{price}</span>
       </div>
       <CustomButton inverted className='custom-button' > ADD TO CART </CustomButton>
    </div>
)

export default collectionItem;