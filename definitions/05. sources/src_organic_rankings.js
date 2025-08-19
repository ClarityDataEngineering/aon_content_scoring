declare({
    schema: 'organic_ranking_output',
    ...(project_config.SOURCE_PROJECT) && {database: project_config.SOURCE_PROJECT},
    name: "final_backlinks_overview",
    description: "An overview for backlinks per page"
});

declare({
    schema: 'organic_ranking_output',
    ...(project_config.SOURCE_PROJECT) && {database: project_config.SOURCE_PROJECT},
    name: "final_keyword_rankings",
    description: "Keyword positions per page"
});