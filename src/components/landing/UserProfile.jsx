import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import userStyles from "/sass/modules/_User.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

export default function UserProfile(props) {
  return (
    <div className={userStyles.UserPage}>
      <h3>Welcome, {props.user}</h3>
      <p>You still haven't purchased any tickets</p>
      <Link to={"/tickets"} className={generalStyles.cta}>
        Get tickets
      </Link>
    </div>
  );
}
