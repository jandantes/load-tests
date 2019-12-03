'use strict'

/* global context describe it */
const { loadTest } = require('loadtest')
const { payload } = require('../../fixtures')
const { formatResult } = require('../../utils')
const debug = require('debug')('reports:singleCampaign:*')
const error = require('debug')('reports:singleCampaign:error:*')

context('Report Service: Single Campaign', () => {
  describe('Get Campaign Status', () => {
    it('getCampaignStatus()', done => {
      loadTest(
        payload.reportsService.getCampaignStatus(),
        (err, result) => {
          done()
          ;(() => err ? error(err) : debug(formatResult(result)))()
        }
      )
    })
  })
})
