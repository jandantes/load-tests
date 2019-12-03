'use strict'

/* global context describe it */
const { loadTest } = require('loadtest')
const { payload } = require('../../fixtures')
const { formatResult } = require('../../utils')
const debug = require('debug')('reports:rejectInvoice:*')
const error = require('debug')('reports:rejectInvoice:error:*')

context('Report Service: Rejected Invoice', () => {
  describe('Get Rejected Invoice by Batch ID', () => {
    it('getRejectInvoiceByBatch()', done => {
      loadTest(
        payload.reportsService.getRejectInvoiceByBatch(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })
})
