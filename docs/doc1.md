### megre to last vertion <br>
yarn upgrade <br>
yarn init <br>
### Megre to nx
```
create dir----"my-nx-dir"
git clone path/to/source/folder path/to/destination/folder
ng config --global cli.packageManager  yarn     // error npm
ng update @angular/core@14 @anngular/cli@14     
yarn remove  @angular/material @angular/cli 
ng update @angular/material @angular/cli

// create workspace
ng add @nrwl/workspace  

// если не получается cоздаем отделное ws и переносим туда файлы 
yarn create nx-workspace my-name-workspace --package-manager=yarn
// сделать commit 
cd my-app <br>
git init <br>
git add README.md <br>
git commit -m "feat(nx-ws):create"
git branch -M main
// копируем из одного проекта в другой 
  app enviropnent stitly assept 
// перезаписать в  apps/xf01/src/*.ts корневые импорты
   import "src/..." on "apps/xf01/src"
 // сделать commit
 git commit -m "chore(app enviropnent stitly assept*src/ ):replase "   // поденная работа || работа по дому

// добавить angular-material
yarn add @angular/material @angular/cdk @angular/animations

// добавть другие пакеты используемые в проекте
yarn add jspdf
yarn add ng-qrcode
yarn add ngx-image-cropper
 // сделать commit
 git commit -m "feat(material jspdf ng-qrcode ngx-image-cropper):add" 

// добавть новый проект
https://nx.dev/nx/generate
nx generate @nrwl/angular:app myapp
nx generate @nrwl/angular:library mylibrary

// изменить package.json
"scripts": {
    "ng": "nx",
    "postinstall": "node ./decorate-angular-cli.js && ngcc --properties es2020 browser module main",
    "xf01:start": "nx serve xf01",
    "xf01:build": "nx build xf01",
    "xf01:test": "nx test xf01",
    "xl01:start": "nx serve xl01",
    "xl01:build": "nx build xl01",
    "xl01:test": "nx test xl01",
    "start": "nx serve",
    "build": "nx build",
    "test": "nx test"
  },

  // Изменить порты запруска angular.json
  https://www.youtube.com/watch?v=EnwVZC0W-g8
  git add .
  git commit -m "feat(xl01*app):add 

  //Создать удаленный репозиторий на gitHub и заргрузить проект ----git branch -M main --!!!!

 git remote add origin https://github.com/igoradigey01/x01-v1.git
 git push -u origin main

 // or если существует ----git branch -M main --!!!!
 git remote add origin https://github.com/igoradigey01/x01-v1.git
 git push -u origin main

 //изменить url удаленнного репозитория можно
 git remote -v   <br>
 git remote set-url origin git@github.com:igoradigey01/nx01.git <br>
 git remote -v 


---chore(help-migration-to-nx):add // поденная работа || работа по дому---


```

### theme  palette color
[color](https://www.materialpalette.com/colors)
[palette](https://www.materialpalette.com)
[theme generator](https://materialtheme.arcsine.dev)
[gitHub theme generator](https://github.com/arciisine/MaterialThemeGenerator)
[sample Design](https://www.uplabs.com)

```
// Read more https://material.angular.io/guide/theming 
// about palette https://biecom.ru/news/gajd-po-sozdaniyu-czvetovoj-palitry-v-powerpoint/
// lesson to pallete https://www.youtube.com/watch?v=YM6CeFZAO6o 
//  gentrator pallete http://mcg.mbitson.com/#!?mcgpalette0=%233f51b5
// generator + View https://materialtheme.arcsine.dev/
// theme lesson https://indepth.dev/tutorials/angular/angular-material-theming-system-complete-guide !!!
// vender-doc color theme created https://material.io/design/color/the-color-system.html#color-theme-creation
// vender-doc      palete                       https://material.io/design/color/the-color-system.html#color-theme-creation
```

### Сhoice of application state storage Subject/BehaviorSubject  or akita
[Как управлять состоянием ](https://habr.com/ru/company/custis/blog/516290/)

[ State management in Angular  observable-store-services](https://georgebyte.com/state-management-in-angular-with-observable-store-services/)

[akita](https://github.com/salesforce/akita/blob/master/docs/docs/angular/architecture.mdx)
[youtube где-то с 7-минуты ](https://www.youtube.com/watch?v=io6BKBzvf0Q&t=1s)

### Динамические модули
[Динамические модули](https://nestjs.ru.com/guide/fundamentals/dynamic-modules.html)

### Book
[enterprise-angular-mono-repo-patterns](https://cdn2.hubspot.net/hubfs/2757427/enterprise-angular-mono-repo-patterns.pdf)

### Docker
```
//---- docker-отчет об использовании дискового пространства <br/>
docker system df <br/>
docker volume ls <br/>
docker volume prune // delete volume <br/>
 docker ps <br/>
 ```
 ### Yandex Map
 ```
 https://www.npmjs.com/package/angular8-yandex-maps
 https://github.com/ddubrava/angular8-yandex-maps
 https://github.com/ddubrava/angular8-yandex-maps/blob/master/docs/EXAMPLES.md
 https://yandex.ru/dev/maps/jsapi/doc/2.1/quick-start/index.html
 https://yandex.ru/dev/maps/jsapi/?from=mapsapi
 ```

 ### assets in libs/ui img-render  is  ok | use Photo in lib
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