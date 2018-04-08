import React from 'react'
import { connect } from 'react-redux'
import Pagination from 'antd/lib/pagination'
import Spin from 'antd/lib/spin'
import style from './style.css'

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
      salesId: "",
      onlyMy: false,
      thisSalesOrigin: true,
      statusFilter: "none"
    }
  }

  componentWillMount() {
    this.sendRequest(this.props.orders.currentPage);
  }

  sendRequest = (pageNum) => this.props.loadData({
    pageNum,
    salesId: this.state.salesId,
    onlyMy: this.state.onlyMy,
    thisSalesOrigin: this.state.thisSalesOrigin,
    statusFilter: this.state.statusFilter,
  })

  submitForm = () => this.sendRequest(1)

  inputSalesId = (salesId) => this.setState({salesId})

  inputOnlyMy = (onlyMy) => this.setState({onlyMy})

  inputThisSalesOrigin = (thisSalesOrigin) => this.setState({thisSalesOrigin})

  inputStatusFilter = (statusFilter) => this.setState({statusFilter})

  setPage = (pageNum) => this.sendRequest(pageNum)

  render() {
    const loading = this.props.orders.loading;
    const currentPage = this.props.orders.currentPage;

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
          <Spin spinning={loading} size="large">
            <div className="alert alert-secondary">
              <p>Тестовый блок</p>
              <dl>
                <dt>Страница</dt><dd>{currentPage}</dd>
                <dt>Всего страниц</dt><dd>{this.props.orders.pages}</dd>
                <dt>Всего записей</dt><dd>{this.props.orders.records}</dd>
              </dl>

              {/*Pagination*/}
              <div className={style.paginationSection}>
                <Pagination showQuickJumper
                            defaultPageSize={20}
                            hideOnSinglePage={true}
                            current={currentPage}
                            total={this.props.orders.records}
                            onChange={this.onPageChanged.bind(this)} />
              </div>

            </div>
          </Spin>
        }
        <OrderList
          orders={this.props.orders}
          deliveryData={this.props.deliveryData}
          contracts={this.props.contracts} />
      </DisplayPage>
    )
  }

  onPageChanged(pageNumber) {
    this.setPage(pageNumber);
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
