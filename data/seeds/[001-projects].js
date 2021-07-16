exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects').del()
      .then(function () {
        // Inserts seed entries
        return knex('projects').insert([
          {
            project_name: "Redo portfolio site",
            project_description: "Making the portfolio way less ugly",
            project_completed: 0
          },
          {
            project_name: "Bestiarium API",
            project_description: "Create a DnD Bestiarium API to help creators make new beasts for their games",
            project_completed: 0
          },
          {
            project_name: "Wake up early for the sprint",
            project_completed: 1
          },
        ]);
      });
  };