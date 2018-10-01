import React from 'react';
import './style/request.scss';
import cx from 'classnames';

class Request extends React.Component {

    constructor(props) {
      super(props);
    }

    editName(name) {
      if (name === 'Подана вами') {
        return name;
      } else {
        name = this.props.name.split(' ');
        name = name[0] + ' ' + name[1][0] + '. ' + name[2][0] + '.';
        return name;
      }
    }

    handleClickRequest() {
      this.props.onClickRequest(this.props.id);
    }

    render() {
      const requestName = (this.props.requestName.length > 50) ? (this.props.requestName.substring(0,50) + '...') : this.props.requestName;
      const requestType = this.props.type == 'submitRequest' ? 'У' : this.props.requestNameFilter[this.props.requestName] != undefined ? this.props.requestNameFilter[this.props.requestName][0] : 'Н';
      const name = this.editName(this.props.name);
      const statusClasses = cx({
				'request__menu': true,
        'icon-check': this.props.status == 'close',
        'icon-ban': this.props.status == 'ignore',
        'icon-clock-o': this.props.status == 'active'
      })

      return (
        <div className='request' onClick={this.handleClickRequest.bind(this)}>
        	<span className='request__icon'>{requestType}</span>
					<div className="request_number">
  					№ {this.props.code}
					</div>
					<div className="request__title">{this.props.requestName}</div>
					<div className="request__additional">
			      <span className="request__status">{name}</span>
			      <span className="bullet">•</span>
			      <span className="request__date">{this.props.date.substring(0,10)}</span>
			    </div>
					<span className={statusClasses}/>
        </div>
      )
    }
}

export default Request;
