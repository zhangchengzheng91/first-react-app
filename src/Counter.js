import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  incrementNum,
  decrementNum
} from './actions/actions'

class Counter extends Component {

  onClickIncrementButton = () => {
    const { doIncrementNum, caption } = this.props
    doIncrementNum(caption)
  }

  onClickDecrementButton = () => {
    const { doDecrementNum, caption } = this.props
    doDecrementNum(caption)
  }

  render() {
    const { caption, counter } = this.props
    return (
      <div>
        <button onClick={this.onClickIncrementButton}>+</button>
        <button onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {counter[caption]}</span>
      </div>
    )
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  //initialValue: PropTypes.number
}

Counter.defaultProps = {
  initialValue: 0
}

const mapStateToProps = state => {
  const { counter } = state
  return {
    counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doIncrementNum: caption => {
      dispatch(incrementNum(caption))
    },
    doDecrementNum: caption => {
      dispatch(decrementNum(caption))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
