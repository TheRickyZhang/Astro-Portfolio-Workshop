# Modified Template
This is an enhanced version of Astro's provided portfolio template provided [here!](https://github.com/withastro/astro/tree/main/examples/portfolio) as part of UF SASE's Web Workshop: Personal Portfolio with Astro.

To follow along, simply apply the patches in order:
```
git apply Patch-1.patch
```

## Brief description of patches
**Patch 1**
- Basic changes to text and images to illustrate how the code corresponds to what is visible on the site
- Static Site Generation with frontmatter/component organization
- Ex. Change default "Jeanine White" -> "Ricky Zhang", default social media icons, images in /public

**Patch 2**
- Add a React Menu button to compare with Astro's built-in components and usage of ```<slot >```
- Examine usage of client:load and ```<script>```

**Patch 3**
- Illustrate a full workflow of creating an astro component with Skills.astro

**Patch 4**
- Examine content structure by renaming "work" content to "projects" everywhere in the code
- Create configuration for a new "blogs" content type and add some basic markdown files
- Inspect dynamic path creation with [...slug]

**Patch 5**
- Finalize blogs by creating components to view and organize the blogs
- Examine process of injecting and reading data into the DOM for state management

## Commands

Ensure you run these from within each project folder (Done, Start).

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

For more information, consult the astro docs or discord server.
