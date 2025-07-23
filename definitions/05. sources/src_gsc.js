declare({
    schema: 'google_search_console',
    ...(project_config.SOURCE_PROJECT) && {database: project_config.SOURCE_PROJECT},
    name: "fct_gsc_url_report",
    description: "The GSC pages final reporting table"
});