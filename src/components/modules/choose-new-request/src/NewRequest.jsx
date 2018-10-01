import React from 'react';
import './style/new-request.scss';
import cx from 'classnames';
import { Link } from 'react-router';

class NewRequest extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        displayRequests: false,
        rotate: false
      }
    }

    handleDisplayRequests() {
      this.setState({
        displayRequests: !this.state.displayRequests,
        rotate: !this.state.rotate
      })
    }

    render() {
      const keys = Object.keys(this.props.requestNameFilter);
      const requestNameClasses = cx({'container__requests__new-request': true, 'container__requests__new-request--show': this.state.displayRequests});
      const arrClasses = cx({'container__requests__request__arr': true, 'container__requests__request__arr--click': this.state.rotate})
      return (
        <div>
          <div className='container__requests__request' onClick={this.handleDisplayRequests.bind(this)}>
            <span className='container__requests__request__type'>{this.props.type[0]}</span>
            <div className={arrClasses}>&#9660;</div>
            <span className='container__requests__request__name'>{this.props.type}</span>
          </div>
          {keys.map((requestName, index) => {
            if(this.props.requestNameFilter[requestName][0] == this.props.type[0]) {
              return (<Link key={index} className='link' to={this.props.requestNameFilter[requestName][1]}><div className={requestNameClasses}>{requestName}</div></Link>);
            }
          })}
        </div>
      )
    }
};

class NewRequests extends React.Component {

    constructor(props) {
      super(props);
    }

    handleBack() {
    	window.location.hash = '/';
    }

    render() {
      return (
        <div className = 'container'>
          <div className='container__title'>
          	<span className='icon-left-open-big container__title_icon' onClick={this.handleBack.bind(this)}></span>
            <span className='container__title_title'>Выберите заявку</span>
          </div>
          <div className='container__requests'>
            <NewRequest requestNameFilter={this.props.requestNameFilter} type={'Адаптация'}/>
            <NewRequest requestNameFilter={this.props.requestNameFilter} type={'Обучение'}/>
            <NewRequest requestNameFilter={this.props.requestNameFilter} type={'Библиотека'}/>
            <NewRequest requestNameFilter={this.props.requestNameFilter} type={'Прочее'}/>
          </div>
        </div>
      )
    }
};

export default NewRequests;
