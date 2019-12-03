'use strict'

/* global context describe it */
const { loadTest } = require('loadtest')
const { payload } = require('../../fixtures')
const { formatResult } = require('../../utils')
const debug = require('debug')('reports:revenue:*')
const error = require('debug')('reports:revenue:error:*')

context('Report Service: Revenue', () => {
  describe('Get Revenue Transaction', () => {
    it('getRevenueTransaction()', done => {
      loadTest(
        payload.reportsService.getRevenueTransaction(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })

  describe('Get Stats', () => {
    it('getStats()', done => {
      loadTest(
        payload.reportsService.getStats(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })
})
