declare({
    schema: 'raw_input',
    ...(project_config.SOURCE_PROJECT) && {database: project_config.SOURCE_PROJECT},
    name: "thought_leadership_http_status_log",
    description: "Gets the HTTP status code for each thought leadership page by date"
});