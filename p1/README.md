## ANGULAR CLI Project 

### A. Add Angular Material
1. ng update --all
2. npm install --save @angular/material @angular/cdk @angular/animations
3. Gesture Support : npm install --save hammerjs; src/main.ts --> import 'hammerjs';
4. BrowserAnimationsModule
5. create a separate NgModule that imports all of the Angular Material components
6. styles.css : @import "@angular/material/prebuilt-themes/indigo-pink.css";
7. index.html --> Add mat-icon and google font
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
```
8. Angular flex
`npm install @angular/flex-layout`
---
### B. Server
1. firebase init
2. firebase project ID  : ng7-mat
---

### C. Side Navigation / Toolbar
1. mat-nav-list -->  mat-list-item ( as directive on a, or as comp )--> mat-icon





