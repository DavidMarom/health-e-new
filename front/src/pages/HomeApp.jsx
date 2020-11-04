import React from "react"
import { connect } from 'react-redux'
import { Jumbo } from "../cmps/Jumbo"
import { Suggested } from "../cmps/Suggested"
import { Articles } from "../cmps/Articles"
import { setSearchBy } from '../store/actions/activityActions.js'

const _HomeApp = () => {
  return (
    <section>
      <Jumbo />
      <div className="main-container-home">
        <Suggested />
        <Articles />
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    searchBy: state.activityReducer.searchBy
  }
}

const mapDispatchToProps = {
  setSearchBy
}
export const HomeApp = connect(mapStateToProps, mapDispatchToProps)(_HomeApp)