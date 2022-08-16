##X01V1
This project was generated using [Nx](https://nx.dev).

### Migrating Angular Project to Nx Workspace 
 step by step in--- help-migaration-to-nx.txt <br>
 [youtube](https://www.youtube.com/watch?v=sdS19tdO1sI)

### ESLint
[настроить Tag // my-app/project.json](https://nx.dev/structure/monorepo-tags) 
[create depConstraints // .eslintrc.json](https://nx.dev/structure/monorepo-tags)
 { "sourceTag": "scope:admin", <br>
   "onlyDependOnLibsWithTags": ["scope:shared", "scope:admin"] <br>
  },
[youtube](https://www.youtube.com/watch?v=EnwVZC0W-g8&t=501s)

### Shared Styles
  [youtube](https://www.youtube.com/watch?v=w_J8dGSPHZU)
  yarn add @angular/material @angular/cdk @angular/animations // если не добавлен <br>
  yarn add bootstrap@next  <br>
  [Sass doc](https://bootstrap-4.ru/docs/5.0/customize/sass/) 
  ```
   // add in project.json "stylePreprocessorOptions" 
  "styles": ["apps/xf01/src/styles/styles.scss"], 
  "stylePreprocessorOptions": {                    
        "includePaths": ["apps/xf01/src/styles/"] 
        },                                        
   ```
  [MaterialThemeGenerator](https://github.com/arciisine/MaterialThemeGenerator)
