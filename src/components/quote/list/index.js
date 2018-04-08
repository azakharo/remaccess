import React from 'react'
import { connect } from 'react-redux'
import Pagination from 'antd/lib/pagination'
import Spin from 'antd/lib/spin'
import style from './style.css'

import {
    DisplayPage,
} from '../../../components/common'

import {
  selectQuoteListData,
} from '../../../reducers/quote'

import {
  requestQuoteList,
} from '../../../actions/quote'

import QuoteList from './list'
import QuoteFilter from './filter'

class PageQuotes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quotationId: "",
      onlyMy: false,
      thisSalesOrigin: true,
      quotationStatus: "",
    }
  }

  sendRequest = (pageNum) => this.props.loadData({
    pageNum,
    quotationId: this.state.quotationId,
    onlyMy: this.state.onlyMy,
    thisSalesOrigin: this.state.thisSalesOrigin,
    quotationStatus: this.state.quotationStatus,
  })


  componentWillMount() {
    this.sendRequest(this.props.quotes.currentPage)
  }

  submitForm = () => this.sendRequest(1)

  inputQuotationId = (quotationId) => this.setState({ quotationId })

  inputOnlyMy = (onlyMy) => this.setState({onlyMy})

  inputThisSalesOrigin = (thisSalesOrigin) => this.setState({thisSalesOrigin})

  inputQuotationStatus = (quotationStatus) => this.setState({quotationStatus})

  setPage = (pageNum) => this.sendRequest(pageNum)

  render() {
    const loading = this.props.quotes.loading;
    const currentPage = this.props.quotes.currentPage;

    return (
      <DisplayPage title="Запросы">
        <QuoteFilter
          onSubmit={this.submitForm}
          quotationId={this.state.quotationId}
          quotationIdChange={this.inputQuotationId}
          onlyMy={this.state.onlyMy}
          onlyMyChange={this.inputOnlyMy}
          exactSalesOrigin={this.state.thisSalesOrigin}
          exactSalesOriginChange={this.inputThisSalesOrigin}
          quotationStatus={this.state.quotationStatus}
          quotationStatusChange={this.inputQuotationStatus}
          />
        {this.props.quotes &&
          <Spin spinning={loading} size="large">
            <div className="alert alert-secondary">
              <p>Тестовый блок</p>
              <dl>
                <dt>Страница</dt>
                <dd>{currentPage}</dd>
                <dt>Всего страниц</dt>
                <dd>{this.props.quotes.pages}</dd>
                <dt>Всего записей</dt>
                <dd>{this.props.quotes.records}</dd>
              </dl>

              {/*Pagination*/}
              <div className={style.paginationSection}>
                <Pagination showQuickJumper
                            defaultPageSize={20}
                            hideOnSinglePage={true}
                            current={currentPage}
                            total={this.props.quotes.records}
                            onChange={this.onPageChanged.bind(this)}/>
              </div>

            </div>
        </Spin>
        }
        <QuoteList quotes={this.props.quotes} />
      </DisplayPage>
    )
  }

  onPageChanged(pageNumber) {
    this.setPage(pageNumber);
  }

}

export default connect(
  (state) => ({
    quotes: selectQuoteListData(state),
  }),
  (dispatch) => ({
    loadData: (query) => dispatch(requestQuoteList(query)),
  })
)(PageQuotes)
