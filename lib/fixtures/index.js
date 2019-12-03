'use strict'

require('dotenv').config()
const { loadTestConfig } = require('../config')
const { reportsService, microwebsiteService } = require('../config')

const {
  INVOICE_ID,
  SINGLE_CAMPAIGN_ID,
  BATCH_CAMPAIGN_ID,
  REJECTED_INVOICE_BATCH_ID,
  START_DATE,
  END_DATE,
  PERIOD,
  TIMEZONE_OFFSET
} = process.env

const fixtures = module.exports = {
  invoiceId: INVOICE_ID,
  singleCampaignId: SINGLE_CAMPAIGN_ID,
  batchCampaignId: BATCH_CAMPAIGN_ID,
  rejectedInvoiceBatchId: REJECTED_INVOICE_BATCH_ID,
  startDate: START_DATE,
  endDate: END_DATE,
  period: PERIOD,
  timezoneOffset: TIMEZONE_OFFSET,
  payload: {
    reportsService: {
      getCampaignStatus: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getCampaignStatus(fixtures.singleCampaignId)}`
      }),
      getOverallReportByDate: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getOverallReportByDate(fixtures.startDate, fixtures.endDate, fixtures.timezoneOffset)}`
      }),
      getBatchOverallByBatch: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getBatchOverallByBatch(fixtures.batchCampaignId)}`
      }),
      getBatchOverallByDate: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getBatchOverallByDate(fixtures.startDate, fixtures.endDate, fixtures.timezoneOffset)}`
      }),
      getBatchProcessed: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getBatchProcessed(fixtures.startDate, fixtures.endDate)}`
      }),
      getInvoiceDetailsByBatch: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getInvoiceDetailsByBatch(fixtures.batchCampaignId)}`
      }),
      getInvoiceListsByBatch: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getInvoiceListsByBatch(fixtures.batchCampaignId)}`
      }),
      getInvoiceListsByDate: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getInvoiceListsByDate(fixtures.startDate, fixtures.endDate, fixtures.timezoneOffset)}`
      }),
      getInvoiceSumListsByDate: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getInvoiceSumListsByDate(fixtures.startDate, fixtures.endDate, fixtures.timezoneOffset)}`
      }),
      getInvoiceAverageAmount: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getInvoiceAverageAmount(fixtures.startDate, fixtures.endDate, fixtures.timezoneOffset)}`
      }),
      getRejectInvoiceByBatch: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getRejectInvoiceByBatch(fixtures.rejectedInvoiceBatchId)}`
      }),
      getTransactionReportByBatch: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getTransactionReportByBatch(fixtures.batchCampaignId)}`
      }),
      getTransactionsByBatch: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getTransactionsByBatch(fixtures.batchCampaignId)}`
      }),
      getTransactionsByDate: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getTransactionsByDate(fixtures.startDate, fixtures.endDate, fixtures.timezoneOffset)}`
      }),
      getTransactionReportByDate: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getTransactionReportByDate(fixtures.startDate, fixtures.endDate, fixtures.timezoneOffset)}`
      }),
      getRevenueTransaction: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getRevenueTransaction(fixtures.startDate, fixtures.endDate, fixtures.period, fixtures.timezoneOffset)}`
      }),
      getStats: () => ({
        ...loadTestConfig,
        url: `${reportsService.url}${reportsService.endpoints.getStats(fixtures.startDate, fixtures.endDate, fixtures.timezoneOffset)}`
      })
    },
    microwebsite: {
      loadInvoice: () => ({
        ...loadTestConfig,
        url: `${microwebsiteService.url}${microwebsiteService.endpoints.loadInvoice(fixtures.invoiceId)}`
      })
    }
  }
}
