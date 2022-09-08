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

  ###  Material Theme
  [MaterialThemeGenerator](https://github.com/arciisine/MaterialThemeGenerator)

  ### assets in libs/ui img-render  is ok
  ```
  [libs/xl01/ui/src/assets/logo1.jpg]
  [libs/xl01/ui/src/lib/img-render.componet.html ]
  <img height="60" width="300" src="/assets/ui/logo1.jpg">
  
  [apps/xl01/project.json]

  "assets": ["apps/xl01/src/favicon.ico",
         "apps/xl01/src/assets",
         {"input" :"libs/xl01/ui/src/assets",
            "glob":"**/*",
            "output":"assets/ui"

         }

  restart nx server !!!  
  ```

  ### Router not work routerLink="{{item.url}}"
  ```
   import { RouterModule } from '@angular/router';
  ```
  ### Prettier - Code formatter (расширение)
