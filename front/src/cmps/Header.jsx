import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { connect } from 'react-redux'

import { logout, login } from '../store/actions/userActions.js';
import { SearchBox } from "./activity/SearchBox.jsx";
import socketService from '../services/socketService.js'

export class _Header extends Component {

  state = {
    // isButtom: false
    isNotificationOn: false,
    notificationInfo: {
      activityTitle: '',
      customerName: ''
    }
  }

  componentDidMount() {
    const { user } = this.props;
    if(user) this.openSocket()
  }

  componentDidUpdate(prevProps){
    // const { user } = this.props;
    if( this.props.user && prevProps.user?._id !== this.props.user._id){
      this.openSocket()
    }
  }

  openSocket= ()=>{
    const { user } = this.props;
    socketService.setup();
    socketService.emit('creatorId', user._id);
    socketService.on('show purchase notifiction', (purchaseInfo) => {
      const notificationInfo = {
        activityTitle: purchaseInfo.activityTitle,
        customerName: purchaseInfo.customerName
      }
      this.ShowNotification(notificationInfo)
    });
  }
  // componentWillUnmount() {
  //   socketService.off('show purchase notifiction');
  //   socketService.terminate();
  // }

  ShowNotification = (notificationInfo) => {
    this.setState({ ...this.state, isNotificationOn: true, notificationInfo: notificationInfo })
  }

  openGuestMode = (ev) => {
    ev.preventDefault();
    const guest = {
      email: 'guestMode@gmail.com',
      password: '123'
    }
    this.props.login(guest);
    this.setState({ loginCred: { email: '', password: '' } });
  }


  render() {
    const { isHomepage, user } = this.props;
    const { isNotificationOn } = this.state;
    const { activityTitle, customerName } = this.state.notificationInfo;
    return (
      <div className="main-header-wrapper">
        <header className="main-header">
          <div className="left-end">
            {isNotificationOn && <div className="purchase-notification flex">
              <div style={{color:'wheat'}}>New Purchase!</div>
              <div style={{color:'biege'}}> {`Event: ${activityTitle}`}</div>
              <div style={{color:'bisque'}}>{`From: ${customerName}`}</div>
              <button className="close-notification" onClick={() => this.setState({ isNotificationOn: false })}>x</button>
            </div>}
            <div className="logo">
              <NavLink to="/">
                <div className="logo-img">
                  <img src={require("../assets/img/logo.jpg")} alt="" />
                </div>
              </NavLink>
            </div>
          </div>

          {!isHomepage && <SearchBox cssClass={"header-search"} />}

          {(!user) ? (
            <div className="right-end">
              <div className="flex wrap space-around">
                <span className="cp m10 nav-override-color " onClick={this.openGuestMode}>Demo</span>
                <NavLink className="explore m10 nav-override-color" to="/activity">Explore</NavLink>
                <NavLink className="cp nav-override-color" to={`/login`}>Login</NavLink>
                <NavLink className="cp nav-override-color" to={`/signUp`}>SignUp</NavLink>
              </div>
              <div>
                <NavLink className="nav-override-color" to={`/user`}><i className="far fa-2x fa-user-circle"></i></NavLink>
              </div>
            </div>) :
            <div className="right-end">
              <div className="flex sb" >
                <NavLink className="explore nav-override-color m10" to={"/activity"}>Explore</NavLink>
                <NavLink className="cp nav-override-color" to={`/`} onClick={this.props.logout}>Logout</NavLink>
              </div>
              <div className="asc">
                <NavLink className="nav-override-color" to={`/user/${user._id}`}><img className="attending-img cursor-pointer" src={user.imgUrl} alt="#" /></NavLink>
              </div>
            </div>
          }
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.loggedInUser
  }
}
const mapDispatchToProps = {
  logout,
  login
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header)