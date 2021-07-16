exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resource_assignments').del()
      .then(function () {
        // Inserts seed entries
        return knex('resource_assignments').insert([
          {
            resource_id: 1,
            project_id: 1
          },
          {
            resource_id: 2,
            project_id: 1
          },
          {
            resource_id: 3,
            project_id: 1
          },
          {
            resource_id: 1,
            project_id: 2
          },
          {
            resource_id: 2,
            project_id: 2
          },
          {
            resource_id: 2,
            project_id: 3
          },
          {
            resource_id: 4,
            project_id: 3
          }
        ]);
      });
  };