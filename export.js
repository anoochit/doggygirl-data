const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');

// databaseURL
const databaseURL = "https://doggygirl.firebaseio.com";

// Initiate Firebase App
firestoreService.initializeApp(serviceAccount, databaseURL);

// Start exporting your data
firestoreService
    .backups(['events','follows', 'images', 'users','messages'])
    .then(collections => {
        // You can do whatever you want with collections
        console.log(JSON.stringify(collections));
    })
