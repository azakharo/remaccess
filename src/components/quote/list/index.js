import React from 'react'
import { connect } from 'react-redux'

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
      pageNum: 1,
      quotationId: "",
      onlyMy: false,
      thisSalesOrigin: true,
      quotationStatus: "",
    }
  }

  sendRequest = () => this.props.loadData({
    pageNum: this.state.pageNum,
    quotationId: this.state.quotationId,
    onlyMy: this.state.onlyMy,
    thisSalesOrigin: this.state.thisSalesOrigin,
    quotationStatus: this.state.quotationStatus,
  })


  componentDidMount() {
    this.sendRequest()
  }

  submitForm = () => this.setState({ pageNum: 1 }, this.sendRequest)

  inputQuotationId = (quotationId) => this.setState({ quotationId })

  inputOnlyMy = (onlyMy) => this.setState({onlyMy})

  inputThisSalesOrigin = (thisSalesOrigin) => this.setState({thisSalesOrigin})

  inputQuotationStatus = (quotationStatus) => this.setState({quotationStatus})

  setPage = (pageNum) => this.setState({ pageNum }, this.sendRequest)

  render() {
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
            <div className="alert alert-secondary">
              <p>Тестовый блок</p>
              <dl>
                <dt>Страница</dt><dd>{this.state.pageNum}</dd>
                <dt>Всего страниц</dt><dd>{this.props.quotes.pages}</dd>
                <dt>Всего записей</dt><dd>{this.props.quotes.records}</dd>
              </dl>
              <button onClick={() => this.setPage(1)}>Страница 1</button>
              <button onClick={() => this.setPage(2)}>Страница 2</button>
              <button onClick={() => this.setPage(3)}>Страница 3</button>
            </div>
          }
        <QuoteList quotes={this.props.quotes} />
      </DisplayPage>
    )
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
