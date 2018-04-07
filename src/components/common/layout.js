import React from 'react'

export const DisplayTable = ({children, hover, loading, search}) => {
  return (
      <table className="table table-sm">
        {children}
      </table>
  )
}

export const DisplayPage = ({title, children, loading}) => {
  return (loading)?(
    <div className="py-3">
      {title && <h3>{title}</h3>}
      <div>Загрузка...</div>
    </div>
  ):(
    <div className="py-3">
      {title && <h3>{title}</h3>}
      {children}
      <p></p>
    </div>
  )
}

// {Array.prototype.concat.apply([], children.map())}
export const DisplayPanelDefinitionList = ({title, children}) => (
  <div className="card w-25 mb-3 mr-3">
    {title && <div className="card-header">{title}</div>}
    <div className="card-body">
      <dl className="row catd-text">
        {children.map((child, key) => (
          key & 1 ?
            <dd key={key} className="col-sm-12 col-lg-6">{child}</dd>
            :
            <dt key={key} className="col-sm-12 col-lg-6">{child}</dt>
        ))}
      </dl>
    </div>
  </div>
)

export const DisplayPanelInfo = ({title, children}) => (
  <div className="card w-25 mb-3 mr-3">
    {title && <div className="card-header">{title}</div>}
    <div className="card-body">
      <p className="card-text">
        {children}
      </p>
    </div>
  </div>
)

export const DisplayPanelBlock = ({title, children}) => (
  <div className="card w-25 mb-3 mr-3">
    {title && <div className="card-header">{title}</div>}
    <div className="card-body">
      <div className="card-text">
        {children}
      </div>
    </div>
  </div>
)

export const DisplayPanelRow = ({children}) => (
  <div className="d-flex">
    {children}
  </div>
)

export const DisplayButtonRow = ({children}) => {
  let idx = 0
  return (
    <div className="d-flex mb-4">
      {React.Children.map(children, child => {
        idx++
        return <div key={idx} className="mr-2">{child}</div>
      })}
    </div>
  )
}
