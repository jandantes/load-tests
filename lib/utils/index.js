'use strict'

const formatResult = result => {
  const {
    totalRequests,
    totalErrors,
    totalTimeSeconds,
    rps,
    meanLatencyMs,
    maxLatencyMs,
    minLatencyMs,
    percentiles,
    errorCodes
  } = result

  const percentage = (() => {
    let percent = ''
    Object
      .entries(percentiles)
      .forEach(
        ([key, value]) => { percent += `\n    ${key}%: ${value}ms` }
      )
    return percent
  })()

  const errors = (() => {
    let error = ''
    Object
      .entries(errorCodes)
      .forEach(
        ([key, value]) => { error += `\n    ${key}: ${value} error${value > 1 && 's'}` }
      )
    return error
  })()

  const summary = `
    total requests: ${totalRequests}
    total time (s): ${totalTimeSeconds}
    requests per second: ${rps}
    mean latency (ms): ${meanLatencyMs}
    max latency (ms): ${maxLatencyMs}
    min latency (ms): ${minLatencyMs}

    requests percentage within a certain time: ${percentage}

    total errors: ${totalErrors}
    errors: ${totalErrors > 0 ? errors : 'none'}
  `

  return summary
}

module.exports = {
  formatResult
}
