import React from 'react'
import { connect } from 'react-redux'

import {
  DisplayPage,
} from '../../../components/common'

import {
  selectOrderListData
} from '../../../reducers/order'

import {
  requestOrderList,
} from '../../../actions/order'

import OrderList from './list'
import OrderFilter from './filter'

class PageOrders extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      salesId: "",
      onlyMy: false,
      thisSalesOrigin: true,
      statusFilter: "none"
    }
  }

  componentDidMount() {
    this.sendRequest()
  }

  sendRequest = () => this.props.loadData({
    pageNum: this.state.pageNum,
    salesId: this.state.salesId,
    onlyMy: this.state.onlyMy,
    thisSalesOrigin: this.state.thisSalesOrigin,
    statusFilter: this.state.statusFilter,
  })

  submitForm = () => this.setState({ pageNum: 1 }, this.sendRequest)

  inputSalesId = (salesId) => this.setState({salesId})

  inputOnlyMy = (onlyMy) => this.setState({onlyMy})

  inputThisSalesOrigin = (thisSalesOrigin) => this.setState({thisSalesOrigin})

  inputStatusFilter = (statusFilter) => this.setState({statusFilter})

  setPage = (pageNum) => this.setState({ pageNum }, this.sendRequest)

  render() {
    return (
      <DisplayPage title="Заказы">
        <OrderFilter
          onSubmit={this.submitForm}
          salesId={this.state.salesId}
          salesIdChange={this.inputSalesId}
          onlyMy={this.state.onlyMy}
          onlyMyChange={this.inputOnlyMy}
          exactSalesOrigin={this.state.thisSalesOrigin}
          exactSalesOriginChange={this.inputThisSalesOrigin}
          statusFilter={this.state.statusFilter}
          statusFilterChange={this.inputStatusFilter} />
        {this.props.orders &&
          <div className="alert alert-secondary">
            <p>Тестовый блок</p>
            <dl>
              <dt>Страница</dt><dd>{this.state.pageNum}</dd>
              <dt>Всего страниц</dt><dd>{this.props.orders.pages}</dd>
              <dt>Всего записей</dt><dd>{this.props.orders.records}</dd>
            </dl>
            <button onClick={() => this.setPage(1)}>Страница 1</button>
            <button onClick={() => this.setPage(2)}>Страница 2</button>
            <button onClick={() => this.setPage(3)}>Страница 3</button>
          </div>
        }
        <OrderList
          orders={this.props.orders}
          deliveryData={this.props.deliveryData}
          contracts={this.props.contracts} />
      </DisplayPage>
    )
  }
}

export default connect(
  (state) => ({
    orders: selectOrderListData(state),
  }),
  (dispatch) => ({
    loadData: (query) => dispatch(requestOrderList(query)),
  })
)(PageOrders)
