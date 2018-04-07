import React from 'react'

import {
  DisplayTime,
} from '../../components/common'

import {
  LOG_LEVEL_CLASS,
  LOG_LEVEL_DEBUG,
} from '../../config'

const Alert = ({logEntry, logEntryClear}) => {
  const collapseId = "alertCollapse" + logEntry.logId
  return (
    <div className={`mb-2 alert alert-${LOG_LEVEL_CLASS[logEntry.level]}`} role="alert">
      <DisplayTime msec={logEntry.level === LOG_LEVEL_DEBUG} timestamp={logEntry.timestamp} />
      &ensp;
      {String(logEntry.message)}
      &ensp;
      {logEntry.debug &&
          <button className="btn btn-link" type="button"
            data-toggle="collapse" data-target={`#${collapseId}`}
            aria-expanded="false" aria-controls={collapseId}>
            Подробнее
          </button>
      }
      <button type="button" className="close" onClick={logEntryClear}><span aria-hidden="true">&times;</span></button>
      {logEntry.debug &&
        <div className="collapse" id={collapseId}>
          <div className="card card-body">
            <pre>
              {JSON.stringify(logEntry.debug, null, 4)}
            </pre>
          </div>
        </div>
      }
    </div>
  )
}

export const DisplayLog = ({
  log,
  clearLog
}) => {
  if (!log || !log.length) return false
  return (
  <div className="mt-3">
    {log.map((logEntry) => (
      <Alert key={logEntry.logId} logEntry={logEntry} logEntryClear={() => clearLog(logEntry.logId)} />
    ))}
  </div>
  )
}
