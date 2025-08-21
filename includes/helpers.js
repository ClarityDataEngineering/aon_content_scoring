function generateCalendar(startDateStr) {
        const startDate = new Date(startDateStr);
        const today = new Date();
        let dates = [];

        // Loop from the start date to today, inclusive
        for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
            const year = d.getFullYear();
            const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
            const day = d.getDate().toString().padStart(2, '0');
            dates.push(`'${year}-${month}-${day}'`);
        }

        // Return a SQL SELECT statement using UNNEST to create a table of dates
        return `
            SELECT PARSE_DATE('%Y-%m-%d', date_str) as event_date_dt
            FROM UNNEST([${dates.join(', ')}]) as date_str
        `;
}


/**
 * Cleans URLs by removing protocols, www, query strings, and standardizing format
 * Preserves trailing slashes for homepages (domain.com/ or domain.com/en/)
 * Removes trailing slashes for all other pages
 */
function sanitiseURL(column) {
  return `
    (
      CASE
        WHEN REGEXP_CONTAINS(
          REGEXP_REPLACE(
            REGEXP_REPLACE(
              REGEXP_REPLACE(
                REGEXP_REPLACE(
                  REGEXP_REPLACE(
                    LOWER(${column}),
                    r'^(https?:\\/\\/)?(www\\.)?', ''
                  ),
                  r'\\s+', ''
                ),
                r'[\\?#].*$', ''         -- move this up
              ),
              r'[^\\x00-\\x7F]', ''
            ),
            r'[^a-z0-9\\-\\/:._=&]', '' -- now runs after query removal
          ),
          r'^[a-z0-9\\-]+\\.[a-z]{2,}(\\/[a-z]{2})?\\/?$'
        )
        THEN
          REGEXP_REPLACE(
            REGEXP_REPLACE(
              REGEXP_REPLACE(
                REGEXP_REPLACE(
                  REGEXP_REPLACE(
                    LOWER(${column}),
                    r'^(https?:\\/\\/)?(www\\.)?', ''
                  ),
                  r'\\s+', ''
                ),
                r'[\\?#].*$', ''         -- same reordering here
              ),
              r'[^\\x00-\\x7F]', ''
            ),
            r'/+$', '/'
          )
        ELSE
          REGEXP_REPLACE(
            REGEXP_REPLACE(
              REGEXP_REPLACE(
                REGEXP_REPLACE(
                  REGEXP_REPLACE(
                    LOWER(${column}),
                    r'^(https?:\\/\\/)?(www\\.)?', ''
                  ),
                  r'\\s+', ''
                ),
                r'[\\?#].*$', ''         -- and here
              ),
              r'[^\\x00-\\x7F]', ''
            ),
            r'/+$', ''
          )
      END
    )
  `;
}


module.exports = {
    generateCalendar, 
    sanitiseURL
}