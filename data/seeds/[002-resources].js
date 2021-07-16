exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources').del()
      .then(function () {
        // Inserts seed entries
        return knex('resources').insert([
          {
            resource_name: "VSCode",
          },
          {
            resource_name: "Brain",
            resource_description: "Brain. Doesn't work at 9 a.m."
          },
          {
            resource_name: "GIMP",
            resource_description: "Like Photoshop, but free."
          },
          {
            resource_name: "Alarm Clock",
            resource_description: "Sonic Boom. Works Sometimes."
          },
        ]);
      });
  };