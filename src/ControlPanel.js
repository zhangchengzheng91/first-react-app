import React, { Component } from 'react'
import Counter from './Counter'
import { connect } from 'react-redux'

class ControlPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  componentWillMount() {
    //console.log('control panel componentWillMount ControlPanel')
  }

  componentDidMount() {
    //console.log('control panel componentDidMount ControlPanel')
  }

  computerSummary = () => {
    const { counter } = this.props
    let summary = 0
    for (let key in counter) {
      summary += counter[key]
    }
    return summary
  }

  render() {
    const { state } = this.props
    console.log('state=', state)
    return (
      <div>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr/>
        <span>total count: {this.computerSummary()}</span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { counter } = state
  return {
    state,
    counter
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel)
