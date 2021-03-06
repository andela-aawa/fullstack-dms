import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';


class NavigationBar extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
    this.context.router.push('/');
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <nav className="black-text" role="navigation">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">DMS</Link>
          <ul className="right hide-on-med-and-down" id="mobile-demo">
            <li><Link to="/">
              {isAuthenticated ?
                <span>Documents</span> : <span>Home</span>}</Link>
            </li>
            {user.roleId === 1
                && <li><Link id="users" to="/users"><span>Users</span></Link></li>}
            <li>
              {!isAuthenticated
                && <Link id="login" to="/login">Login</Link>}
            </li>
            {isAuthenticated && <li><Link id="profile" to="/editprofile">Profile</Link>
            </li>}
            <li>
              {isAuthenticated
                ? <a href="" onClick={this.logout.bind(this)}>Logout</a>
                : <Link id="signup" to="/signup">Sign up</Link>
              }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired,
};

NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
