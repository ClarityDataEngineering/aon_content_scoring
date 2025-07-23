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
 * Cleans a URL, removing all query strings 
 */
function sanitiseURL(url) {
    return `REGEXP_REPLACE(REGEXP_REPLACE(REGEXP_REPLACE(${url}, r'^(https?:\\/\\/)?(www\\.)?', ''), r'[^a-zA-Z0-9\\-\\/:.\\s].*', ''), r'[^\\x00-\\x7F].*', '')`
};

module.exports = {
    generateCalendar, 
    sanitiseURL
}