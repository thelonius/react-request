import React from 'react';
import SelectedItems from './SelectedItems';
import Items from './Items';
import Filters from './Filters';
import {ButtonPrimary} from '../../button';
import Ajax from '../../../../utils/ajax';
import {some} from 'lodash';
import cx from 'classnames';
import './style/select-items.scss';

/*var items = {
	headerCols: [{ name: 'a', type: 'integer' }],
	items: [
		{ id: '1', data: {fullname: '1'} },
		{ id: '2', data: {fullname: '2'} },
		{ id: '3', data: {fullname: '3'} },
		{ id: '4', data: {fullname: '4'} }
	]
}*/

class SelectItems extends React.Component {

	constructor(props){
		super(props);
		this.types = {'integer': 'integer', 'date': 'date'};
		this.errors = { MAX_SELECTED_ITEMS: `Вы не можете выбрать более ${props.maxSelectedItems} элемента(ов)` };

		this.onSort = this.onSort.bind(this);
		this.onAddItem = this.onAddItem.bind(this);
		this.onRemoveItem = this.onRemoveItem.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleChangeSearch = this.handleChangeSearch.bind(this);
		this.handleChangePage = this.handleChangePage.bind(this);
		this._setData = this._setData.bind(this);
		this._castType = this._castType.bind(this);
		this.handleCloseError = this.handleCloseError.bind(this);
		this.state = {
			headerCols: props.headerCols || [],
			items: props.items || [],
			selectedItems: props.selectedItems || [],
			maxSelectedItems: Number.MAX_VALUE,
			search: '',
			page: 1,
			pagesCount: props.pagesCount || 1,
			isLoading: true,
			error: '',
			isShowError: false
		}
	}

	static childContextTypes = {
		onSort: React.PropTypes.func,
		onAddItem: React.PropTypes.func,
		onRemoveItem: React.PropTypes.func
	}



    getChildContext(){
    	return {
    		onSort: this.onSort,
    		onAddItem: this.onAddItem,
    		onRemoveItem: this.onRemoveItem
    	};
  	}

	static propTypes = {
		items: React.PropTypes.array,
		selectedItems: React.PropTypes.array,
		maxSelectedItems: React.PropTypes.number,
		title: React.PropTypes.string,
		onClose: React.PropTypes.func,
		onSave: React.PropTypes.func,
		onChange: React.PropTypes.func
	}

	static defaultProps = {
		title: '',
		maxSelectedItems: Number.MAX_VALUE
	}

	componentDidMount(){
		/*var self = this;
		this._getData(this.props.query, this.state.page, this.state.search).then(data => {
			self._setData(data);
		});*/
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			items: nextProps.items ? nextProps.items : [],
			selectedItems: nextProps.selectedItems ? nextProps.selectedItems : [],
			isLoading: false,
			pagesCount: nextProps.pagesCount ? nextProps.pagesCount : 1
		});
	}

	_castType(val, type){

		function isInteger(val) {
			return isNaN(parseInt(val)) === false;
		}

		function isDate(val){
			return !isNaN(Date.parse(val));
		}

		if (val === undefined || val === null || !(type in this.types)) return val.toString();
		switch(type) {
			case this.types.integer:
				if (isInteger(val) === true){
					return Number(val);
				}
				break;
			case this.types.date:
				if (isDate(val) === true){
					return new Date(val);
				} else {
					return val.toString();
				}
				break;
			default:
				return val.toString();
		}
	}

	/*_getData(query, page, search){
		return Ajax.sendRequest(query + '&page=' + page + '&search=' + search).then(_items => {
			return JSON.parse(_items);
		}).catch(function(){
			return [];
		});
	}*/

	_setData(data){
		var self = this;
		if (!data || !data.items || !data.headerCols) return;
		data.items = data.items.map(item => {
			Object.keys(item.data).forEach((col, index) => {
				item.data[col] = self._castType(item.data[col], data.headerCols[index].type);
			})
			return item;
		});
		this.setState({items: data.items, headerCols: data.headerCols, pagesCount: data.pagesCount, isLoading: false});
	}

	onSort(index, isAscending){
		function getFieldByIndex(data, index){
			var keys = Object.keys(data).filter((key, _index) => {
				return index === _index;
			});
			return keys.length > 0 ? data[keys[0]] : null;
		}

		var isAsc = isAscending ? 1 : -1;
		var items = this.state.items;
		var firstField;
		var secondField;
		items.sort((first, second) => {
			if (first.strDate && index === 2) {
				firstField = new Date(first.strDate);
				secondField = new Date(second.strDate);
			} else {
				firstField = getFieldByIndex(first.data, index);
				secondField = getFieldByIndex(second.data, index);
			}
			if (firstField && secondField){
				return firstField > secondField ? isAsc : firstField === secondField ? 0 : -(isAsc);
			}
			return 0;
		});
		this.setState({items: items});
	}

	onAddItem(item){
		var _items = this.state.items;
		var _selectedItems = this.state.selectedItems;

		if (_selectedItems.length >= this.props.maxSelectedItems){
			this.setState({error: this.errors.MAX_SELECTED_ITEMS, isShowError: true});
			return;
		}
		if (some(_selectedItems, {id: item.id})) return;
		_selectedItems.push({...item});
		this.setState({ items: _items, selectedItems: _selectedItems});
	}

	onRemoveItem(id){
		var _selectedItems = this.state.selectedItems;

		_selectedItems = _selectedItems.filter(r => {
			return r.id !== id;
		});
		this.setState({ selectedItems: _selectedItems });
	}

	handleSave(){
		if (this.props.onSave){
			this.props.onSave(this.state.selectedItems);
			this.props.onClose();
		}
	}

	handleChangeSearch(search){
		var self = this;
		this.setState({search: search, isLoading: true, page: 1});
		if (this.props.changedQuary){
			this.props.changedQuary(1, search);
		}
		/*this._getData(this.props.query, 1, search).then(data => {
			self._setData(data);
		});*/
	}

	handleChangePage(page){
		var self = this;
		this.setState({page: page, isLoading: true});
		if (this.props.changedQuary){
			this.props.changedQuary(page, this.state.search);
		}
		/*this._getData(this.props.query, page, this.state.search).then(data => {
			self._setData(data);
		});*/
	}

	handleCloseError(){
		this.setState({error: '', isShowError: false});
	}

	render() {
		const {title, headerCols } = this.props;
		const {isShowError, isLoading, error, page, search, items, selectedItems, pagesCount } = this.state;
		const errorClass = cx({
			'alert': true,
			'alert--info': true,
			'select-item__error': true,
			'select-item__error--show': isShowError
		});

		return (
			<div className="select-items">
				<div className="select-items__modal-box">
					<div className="select-items__content">
						<div className="select-item__header">
							<button type="button" className="close-button" onClick={this.props.onClose}>&times;</button>
							<span>{title}</span>
						</div>
						<div className="select-item__body clearfix">
							<Filters
								page={page}
								pagesCount={pagesCount}
								search={search}
								onSearch={this.handleChangeSearch}
								onPage={this.handleChangePage}/>
							<Items items={items} selectedItems={selectedItems} headerCols={headerCols} isLoading={isLoading}/>
							<SelectedItems items = {selectedItems} />
						</div>
						<div className="select-item__footer">
							<div className={errorClass}>
								<button type="button" className="close-button" onClick={this.handleCloseError}>&times;</button>
								<span>{error}</span>
							</div>
							<ButtonPrimary onClick={this.handleSave} text='Сохранить' />
						</div>
					</div>
				</div>
			</div>
		);
	}
};
export default SelectItems;
