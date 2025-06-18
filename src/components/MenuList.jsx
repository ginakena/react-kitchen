import listingItems from '../data/listingItems';
import { FcRating } from "react-icons/fc";

function ListingItem({ image, title, description, price, rating, discount }) {
  return (
    <div className="listing-card">
      <div className="image-container">
        <img src={image} alt={title} className="listing-image" />
        
        <span className="discount-item">{discount}%</span>
        
        <span className="rating-item">
          <FcRating style={{ marginRight: '0.25rem' }} />
          {rating}
        </span>
      </div>

      <h2 className="listing-title">{title}</h2>
      <p className="listing-description">{description}</p>
      <div className="listing-details">
        <span className="price">{price}</span>
      </div>
    </div>
  );
}


function MenuList() {
  return (
    <section className="listing-section">
      {listingItems.map((item, idx) => (
        <ListingItem
          key={idx}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          rating={item.rating}
          discount={item.discount}
        />
      ))}
    </section>
  );
}

export default MenuList;
