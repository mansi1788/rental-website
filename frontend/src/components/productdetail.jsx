import React from 'react';

const ProductDetail = (props) => {
  const { title, description, image, category, price, date } = props;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {category ? category : 'Unknown'} 
        on {new Date(date).toGMTString()}</small></p>
        <p className="card-text"><strong>Price: ${price}</strong></p>
        <a href="/newsdetail" className="btn btn-primary">Read more</a>
      </div>
    </div>
  );
};

export default ProductDetail;
