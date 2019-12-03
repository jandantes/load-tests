'use strict'

/* global context describe it */
const { loadTest } = require('loadtest')
const { payload } = require('../../fixtures')
const { formatResult } = require('../../utils')
const debug = require('debug')('reports:batchOverall:*')
const error = require('debug')('reports:batchOverall:error:*')

context('Report Service: Batch Overall', () => {
  describe('Get Overall Report by Date', () => {
    it('getOverallReportByDate()', done => {
      loadTest(
        payload.reportsService.getOverallReportByDate(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })

  describe('Get Overall by Batch ID', () => {
    it('getBatchOverallByBatch()', done => {
      loadTest(
        payload.reportsService.getBatchOverallByBatch(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })

  describe('Get Overall by Date', () => {
    it('getBatchOverallByDate()', done => {
      loadTest(
        payload.reportsService.getBatchOverallByDate(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })

  describe('Get Batch Processed', () => {
    it('getBatchProcessed()', done => {
      loadTest(
        payload.reportsService.getBatchProcessed(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })
})
