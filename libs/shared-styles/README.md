# shared-styles
```
 "targets": {
    "build": {
      "options": {
        "styles": [
          "libs/shared-styles/src/style.scss",
          "libs/shared-styles/src/util.scss"
        ]
      }},
    "test": {
      "executor": "@nrwl/jest:jest",
      "outputs": ["coverage/libs/shared-styles"],
      "options": {
        "jestConfig": "libs/shared-styles/jest.config.ts",
        "passWithNoTests": true
      }
    },
```