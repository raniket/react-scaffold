import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResource } from '../actions/';
import './Sample.css';

class Sample extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    // get data if needed to display by firing the action
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { loading } = this.props;

    const loader = (
      <div className="col-sm-8 d-flex justify-content-center">
        <div className="loader" >
        </div>
      </div>
    );
    
    const displayTemplate = (<div>displa template</div>);
    // const finalTemplate = (loading === true) ? loader : displayTemplate;
    const finalTemplate = (<div>final template</div>);

    return (
      <div>
        <div className="row justify-content-center">
          {finalTemplate}
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading
  }
}

const mapDispatchToProps = {
  getResource: getResource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
