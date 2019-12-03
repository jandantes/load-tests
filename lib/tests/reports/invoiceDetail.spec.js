'use strict'

/* global context describe it */
const { loadTest } = require('loadtest')
const { payload } = require('../../fixtures')
const { formatResult } = require('../../utils')
const debug = require('debug')('reports:invoiceDetail:*')
const error = require('debug')('reports:invoiceDetail:error:*')

context('Report Service: Invoice Details', () => {
  describe('Get Invoice Details by Batch ID', () => {
    it('getInvoiceDetailsByBatch()', done => {
      loadTest(
        payload.reportsService.getInvoiceDetailsByBatch(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })

  describe('Get Invoice List by Batch ID', () => {
    it('getInvoiceListsByBatch()', done => {
      loadTest(
        payload.reportsService.getInvoiceListsByBatch(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })

  describe('Get Invoice List by Date', () => {
    it('getInvoiceListsByDate()', done => {
      loadTest(
        payload.reportsService.getInvoiceListsByDate(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })

  describe('Get Invoice Sum List by Date', () => {
    it('getInvoiceSumListsByDate()', done => {
      loadTest(
        payload.reportsService.getInvoiceSumListsByDate(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })

  describe('Get Invoice Average Amount List by Date', () => {
    it('getInvoiceAverageAmount()', done => {
      loadTest(
        payload.reportsService.getInvoiceAverageAmount(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })
})
