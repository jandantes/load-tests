'use strict'

/* global context describe it */
const { loadTest } = require('loadtest')
const { payload } = require('../../fixtures')
const { formatResult } = require('../../utils')
const debug = require('debug')('reports:transaction:*')
const error = require('debug')('reports:transaction:error:*')

context('Report Service: Transaction', () => {
  describe('Get Transaction Report by Batch ID', () => {
    it('getTransactionReportByBatch()', done => {
      loadTest(
        payload.reportsService.getTransactionReportByBatch(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })

  describe('Get Transactions by Batch ID', () => {
    it('getTransactionsByBatch()', done => {
      loadTest(
        payload.reportsService.getTransactionsByBatch(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })

  describe('Get Transactions by Date', () => {
    it('getTransactionsByDate()', done => {
      loadTest(
        payload.reportsService.getTransactionsByDate(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })

  describe('Get Transaction Report by Date', () => {
    it('getTransactionReportByDate()', done => {
      loadTest(
        payload.reportsService.getTransactionReportByDate(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })
})
