import React from 'react'

const Category_66 = ({Categories}) => {
    console.log('categories', Categories);
    return (
        <div className="btn-container">
          { Categories.map( (item) => {
            const {id, Category} = item;
            return (
                <button key={id}
                type="button" 
                className="filter-btn" 
                data-id={Category}>
                {item}
                </button>
            )
        })}
        </div>
  );
};


export default Category_66;
