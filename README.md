# Gracias

 [Demo](https://fanbase.shaniagracia.my.id)

## This blog is using

1. [Vue.js]: Frontend Framework
1. [Firebase]: Database, Storage, Serverless Function as a service, Auth
1. [Vuetify]: UI Framework
1. [Quill]: Text editor
1. [Disqus]: Comment & Reply

## If you want to fork and use

1. Fork & Clone
1. Start [firebase] project
1. Start [firebase] Authentication, Database(Cloud Firestore), Storage, Hosting, Functions
1. Add test user by email/password on firebase console
1. Set test users' display name
1. firebase init(using [firebase cli] & No overwrite jsons of firebase)
1. Set firebase your credential on [src/firebase/credentials.js](https://github.com/LoveMeWithoutAll/book-blog/blob/master/src/firebase/credentials.js) by firebase
1. Set your project ID on [.firebasercc](https://github.com/LoveMeWithoutAll/book-blog/blob/master/.firebaserc) by firebase project ID
1. Set [Disqus] short name on [src/components/Disqus.vue](https://github.com/LoveMeWithoutAll/book-blog/blob/master/src/components/Disqus.vue): line 3
1. Set [Google Analytics]((https://analytics.google.com/)) on [public/index.html](https://github.com/LoveMeWithoutAll/book-blog/blob/master/public/index.html)
1. Naming on [src/components/Nav.vue](https://github.com/LoveMeWithoutAll/book-blog/blob/master/src/components/Nav.vue): line 7 ~ 11
1. Naming title on [public/index.html](https://github.com/LoveMeWithoutAll/book-blog/blob/master/public/index.html): line 9
1. npm run lint --fix
1. npm run build
1. firebase deploy(using [firebase cli])

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

[Vue.js]: https://vuejs.org/
[firebase]: https://firebase.google.com/
[Vuetify]: https://github.com/vuetifyjs/vuetify
[Quill]: https://quilljs.com/
[Disqus]: https://disqus.com/
[firebase cli]: https://firebase.google.com/docs/cli/
