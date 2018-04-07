import React from 'react'

export class DisplayPopover extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  toggle = () => this.setState({expanded: !this.state.expanded})  

  render() {
    return (
      <span>
        <span className="popper">
          <a role="button" className="popper-label" onClick={this.toggle}>{this.props.title}</a>
          {this.state.expanded &&
            <div className="popover bottom" style={{top: "auto", left: "auto", display: "block"}}>
              <div className="arrow" style={{left: "20px"}}></div>
              {this.props.header &&
                <div className="popover-header">{this.props.header}</div>
              }
              <div className="popover-content">
                {this.props.children}
              </div>
            </div>
          }
        </span>
      </span>
    )
  }

}
