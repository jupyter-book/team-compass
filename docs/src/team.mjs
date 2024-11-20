import yaml from "js-yaml";
import fs from "fs";

// Read and parse team data
const teamData = yaml.load(fs.readFileSync("data/team.yml", "utf8"));
const teamDirective = {
  name: "team",
  doc: "Display members of a team!",
  arg: { type: String, doc: "The team name.", required: true },
  run(data, vfile, ctx) {
    const team = data.arg;
    var cards = [];
    teamData.forEach(ii => {
      if (ii["team"] === team) {
        cards.push(`
:::{card} ${ii["name"]}
:link: https://github.com/${ii["github"]}
:footer: **Affiliation:** ${ii['affiliation']}
![${ii["name"]} avatar](https://github.com/${ii["github"]}.png)
:::`)
      }
    });
    if (cards.length === 0) {
      throw new Error(`Team ${team} not found.`);
    }
    const grid = ctx.parseMyst(`
::::{grid} 3
${cards.join("\n")}
::::`).children[0];
    return [grid];
  },
};

const plugin = {
  name: "Compass team plugins",
  directives: [teamDirective],
};

export default plugin;