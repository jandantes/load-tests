'use strict'

require('dotenv').config()

const {
  CONCURRENCY,
  MAX_REQUESTS,
  MAX_SECONDS,
  REQUESTS_PER_SECOND,
  MICROWEBSITE_URL,
  REPORTS_URL
} = process.env

const reportsURL = REPORTS_URL
const microwebsiteURL = MICROWEBSITE_URL

const config = {
  loadTestConfig: {
    concurrency: CONCURRENCY,
    maxRequests: MAX_REQUESTS,
    maxSeconds: MAX_SECONDS,
    requestsPerSecond: REQUESTS_PER_SECOND,
    quiet: true,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
  },
  reportsService: {
    url: reportsURL,
    endpoints: {
      getCampaignStatus: batchId => `/campaign.json/${batchId}/`,
      getOverallReportByDate: (startDate, endDate, timezoneOffset) =>
        `/batch.json/stats/startDate/${startDate}/endDate/${endDate}/timezone/${timezoneOffset}`,
      getBatchOverallByBatch: batchId => `/batch.json/${batchId}`,
      getBatchOverallByDate: (startDate, endDate, timezoneOffset) =>
        `/batch.json/startDate/${startDate}/endDate/${endDate}/timezone/${timezoneOffset}`,
      getBatchProcessed: (startDate, endDate) =>
        `/batch.json/processed/startDate/${startDate}/endDate/${endDate}`,
      getInvoiceDetailsByBatch: (batchId) => `/batch.json/${batchId}/invoice/stats`,
      getInvoiceListsByBatch: (batchId) => `/batch.json/${batchId}/invoice/`,
      getInvoiceListsByDate: (startDate, endDate, timezoneOffset) =>
        `/invoice.json/startDate/${startDate}/endDate/${endDate}/timezone/${timezoneOffset}`,
      getInvoiceSumListsByDate: (startDate, endDate, timezoneOffset) =>
        `/invoice.json/stats/startDate/${startDate}/endDate/${endDate}/timezone/${timezoneOffset}`,
      getInvoiceAverageAmount: (startDate, endDate) =>
        `/invoices.json/avg/startDate/${startDate}/endDate/${endDate}`,
      getRejectInvoiceByBatch: (batchId) => `/batch.json/${batchId}/reject/`,
      getTransactionReportByBatch: (batchId) => `/batch.json/${batchId}/transaction/stats`,
      getTransactionsByBatch: (batchId) => `/batch.json/${batchId}/transaction/`,
      getTransactionsByDate: (startDate, endDate, timezoneOffset) =>
        `/transaction.json/startDate/${startDate}/endDate/${endDate}/timezone/${timezoneOffset}`,
      getTransactionReportByDate: (startDate, endDate, timezoneOffset) =>
        `/transaction.json/stats/startDate/${startDate}/endDate/${endDate}/${timezoneOffset}`,
      getRevenueTransaction: (startDate, endDate, period, timezoneOffset) =>
      `/revenue.json/transactionAmount/startDate/${startDate}/endDate/${endDate}/by/${period}/timezone/${timezoneOffset}/`,
      getStats: (startDate, endDate, timezoneOffset) =>
        `/revenue.json/stats/startDate/${startDate}/endDate/${endDate}/${timezoneOffset}`
    }
  },
  microwebsiteService: {
    url: microwebsiteURL,
    endpoints: {
      loadInvoice: invoiceId => `/${invoiceId}`
    }
  }
}

module.exports = config
