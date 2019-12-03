'use strict'

/* global context describe it */
const { loadTest } = require('loadtest')
const { payload } = require('../../fixtures')
const { formatResult } = require('../../utils')
const debug = require('debug')('microwebsite:singleInvoice:*')
const error = require('debug')('microwebsite:singleInvoice:error:*')

context('MicroWebsite Service: Load Invoice', () => {
  describe('Load a single invoice', () => {
    it('loadInvoice()', done => {
      loadTest(
        payload.microwebsite.loadInvoice(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })
})
