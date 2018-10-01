import React from 'react';
import DropDown from '../components/modules/dropdown';
import Request from '../components/modules/request';
import SearchBar from '../components/modules/search-bar';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';
import cx from 'classnames';

class Requests extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			showUpIcon: false,
			showIcons: true,
			number: Math.floor(document.documentElement.clientHeight / 50)
		};

		this.handleShowIcon = this.handleShowIcon.bind(this);
		this.handleScrollDownload = this.handleScrollDownload.bind(this);
		this.handleScrollIcon = this.handleScrollIcon.bind(this);
		this.showIconsScroll = this.showIconsScroll.bind(this);
	}

	componentDidMount(){
		this.props.handleGetRequests('', 1, 1, this.state.number);
		window.addEventListener('scroll', this.handleScrollDownload);
		window.addEventListener('scroll', this.handleScrollIcon);
		window.addEventListener('scroll', this.handleShowIcon);
	}

	componentWillReceiveProps() {
		this.refs.icons.style.right = ((document.documentElement.clientWidth - this.refs.container.offsetWidth) / 2 + 20) + 'px';
	}

	componentWillUnmount() {
		this.props.rejectRequests();
		window.removeEventListener('scroll', this.handleScrollDownload);
		window.removeEventListener('scroll', this.handleScrollIcon);
		window.removeEventListener('scroll', this.handleShowIcon);
	}

	handleNewPage(page) {
		this.props.rejectRequests();
		this.props.handleGetRequests(this.props.search, page, this.props.selectedPayload, this.state.number);
	}

	handleNewSearch(search) {
		this.props.rejectRequests();
		this.props.handleGetRequests(search, 1, this.props.selectedPayload, this.state.number);
	}

	handleChangeFilter(e, payload) {
		this.props.rejectRequests();
		this.props.handleGetRequests(this.props.search, 1, payload, this.state.number);
	}

	handleRequestClick(id) {
		window.location.hash = `#/requests/${id}`;
	}

	handleNewRequest() {
		window.location.hash = '#/newrequests';
	}

	handleScrollDownload() {
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;
		const offset = window.pageYOffset;
		const { loading, page, pagesCount, search, selectedPayload } = this.props;

		if (scrollHeight - (clientHeight + offset) < 100 && !loading && (page + 1) <= pagesCount) {
			this.props.handleGetRequests(search, page + 1, selectedPayload, this.state.number);
		}
	}

	handleScrollIcon() {
		clearTimeout(this.timerId);
		this.setState({
			showIcons: false
		});

		this.timerId = setTimeout(this.showIconsScroll, 500);
	}

	handleScrollToTop() {
		window.scrollTo(0, 0);
	}

	handleShowIcon() {
		if (window.pageYOffset > document.documentElement.clientHeight * 1.5) {
			this.setState({
				showUpIcon: true
			});
		} else {
			this.setState({
				showUpIcon: false
			});
		}
	}

	showIconsScroll() {
		this.setState({
			showIcons: true
		});
	}

	render() {
		const { requests, dropItems, selectedPayload, loading, error, status, requestNameFilter } = this.props;
		const loadingClasses = cx({
			'overlay-loading--show': loading,
			'overlay-loading': loading,
			'loading-class': loading
		});

		const requestClasses = cx({
			'component-container': true
		});

		const upIconClasses = cx({
			'icon-container__up-icon': true,
			'icon-container__up-icon--show': this.state.showUpIcon
		});

		const iconsClasses = cx({
			'icon-container': true,
			'icon-container--show': this.state.showIcons && !loading > 0
		});

		return (
			<div className='container' ref='container'>
				<div className={iconsClasses} ref='icons'>
					<span className='icon-container__add-icon icon-plus' onClick={this.handleNewRequest.bind(this)}/>
					<span className={upIconClasses} onClick={this.handleScrollToTop}>&and;</span>
				</div>
				<div className='title-container' ref='container'>
					<span className='title-container__icon icon-file'/>
					<span className='title-container__title'>Управление заявками</span>
				</div>
				<div className='filter-container'>
					{ status === 'error' && <AlertDanger onClose={this.props.handleRejectStatus} text={error} /> }
					{ status === 'success' && <AlertSuccess onClose={this.props.handleRejectStatus} text={error} /> }
					<SearchBar onSearch={this.handleNewSearch.bind(this)} className='filter-container__search-bar'/>
					<DropDown
						className='filter-container__filter'
						items={dropItems}
						deviders={[ 1 ]}
						selectedPayload={selectedPayload}
						onChange={this.handleChangeFilter.bind(this)}
					/>
				</div>
				<div className={requestClasses}>
					{requests.length === 0 && loading === false ?
						<div className='no-requests'>Нет заявок</div> :
						requests.map((request, index) => {
							return (
								<Request
									key={index}
									{...request}
									requestNameFilter={requestNameFilter}
									onClickRequest={this.handleRequestClick.bind(this)}
									scroll={document.documentElement.scrollHeight}
								/>
							);
						})
					}
				</div>
				<div className={loadingClasses}/>
			</div>
		);
	}
}

export default Requests;
