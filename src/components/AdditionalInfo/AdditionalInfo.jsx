import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
export default function AdditionalInfo({ url, location }) {
  return (
    <div className="Addit_info">
      <h4 className="add_title">Additional information</h4>
      <ul>
        <li className="add_link">
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: {
                from: location.state.from,
              },
            }}
            className="add_link"
            activeClassName="active_link"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: {
                from: location.state.from,
              },
            }}
            className="add_link"
            activeClassName="active_link"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
AdditionalInfo.propTypes = {
  value: PropTypes.string,
  location: PropTypes.object,
};
