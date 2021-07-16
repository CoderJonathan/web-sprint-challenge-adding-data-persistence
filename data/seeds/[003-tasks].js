exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks').del()
      .then(function () {
        // Inserts seed entries
        return knex('tasks').insert([
          {
            task_description: "Preplanning",
            task_notes: "Create new wireframe and choose colors",
            task_completed: 1,
            project_id: 1
          },
          {
            task_description: "Project images",
            task_notes: "Create images that display multiple different viewpoints of the sites",
            task_completed: 0,
            project_id: 1
          },
          {
            task_description: "API structure",
            task_notes: "Create sketch of different tables and where they link",
            task_completed: 0,
            project_id: 2
          },
          {
            task_description: "Create project skeleton",
            task_notes: "Migrations and seeds",
            task_completed: 1,
            project_id: 2
          },
          {
            task_description: "Build endpoints",
            task_notes: "Model, middleware, router",
            task_completed: 0,
            project_id: 2
          },
          {
            task_description: "Set alarm(s)",
            task_notes: "Yes, 12 of them.",
            task_completed: 1,
            project_id: 3
          }
        ]);
      });
  };