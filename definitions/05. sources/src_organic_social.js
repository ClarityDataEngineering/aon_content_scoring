declare({
    schema: 'organic_social_production',
    ...(project_config.SOURCE_PROJECT) && {database: project_config.SOURCE_PROJECT},
    name: "social_posts",
    description: "The organic social final reporting table"
});