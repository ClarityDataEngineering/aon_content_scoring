declare({
    schema: 'ads_rollup',
    ...(project_config.SOURCE_PROJECT) && {database: project_config.SOURCE_PROJECT},
    name: "ad_report",
    description: "Rollup ad reporting table for all ad platforms"
});