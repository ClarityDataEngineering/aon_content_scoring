declare({
    schema: 'ga4_dataform_output',
    ...(project_config.SOURCE_PROJECT) && {database: project_config.SOURCE_PROJECT},
    name: "final_ga4_pages",
    description: "The GA4 pages final reporting table"
});

declare({
    schema: 'ga4_dataform_output',
    ...(project_config.SOURCE_PROJECT) && {database: project_config.SOURCE_PROJECT},
    name: "final_ga4_sessions",
    description: "The GA4 sessions final reporting table"
});

declare({
    schema: 'ga4_dataform_staging',
    ...(project_config.SOURCE_PROJECT) && {database: project_config.SOURCE_PROJECT},
    name: "stg_ga4_pages_aon_attributes",
    description: "GA4 staging view containing the latest page attributes for flagship pages"
});

declare({
    schema: 'ga4_dataform_output',
    ...(project_config.SOURCE_PROJECT) && {database: project_config.SOURCE_PROJECT},
    name: "final_ga4_events",
    description: "The big and wide final events table containing all data "
});