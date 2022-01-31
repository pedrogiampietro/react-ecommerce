import { withRouter } from 'react-router-dom';
import studioBag from '../../assets/studio-bag.png';
import './MainSection.styles.scss';

export function MainSection({ history }) {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={studioBag} alt="studio bag" />
        </div>
        <div className="ms-m-description">
          <h2>Designed for fashion, crafted for study.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam at
            corrupti sapiente enim quae? Dicta recusandae ex quia minus, fugiat
            reprehenderit voluptate ratione saepe corporis sunt eum mollitia
            quis? Debitis.
          </p>
          <button
            className="button is-black"
            id="shop-now"
            onClick={() => history.push('/product/1')}
          >
            Studio Bag
          </button>
        </div>
      </div>
    </div>
  );
}
