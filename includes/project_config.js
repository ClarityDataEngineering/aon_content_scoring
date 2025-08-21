const SOURCE_PROJECT = ''
const START_DATE = '2024-01-01'
const OUTPUT_STAGING_DATASET = 'content_scoring_staging'
const OUTPUT_MART_DATASET = 'content_scoring_output'
const PAGES_TO_INCLUDE_RX = '^aon\\.com\\/[a-zA-Z]{2}(\/.*)?$'


module.exports = {
    SOURCE_PROJECT,
    START_DATE,
    OUTPUT_STAGING_DATASET,
    OUTPUT_MART_DATASET,
    PAGES_TO_INCLUDE_RX
}