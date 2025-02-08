const {withNativeFederation, shareAll} = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

    name: 'mini-market-product',

    exposes: {
        './Search': './src/app/pages/search/search.component',
    },

    shared: {
        ...shareAll({singleton: true, strictVersion: true, requiredVersion: 'auto'}),
    },

    skip: [
        'rxjs/ajax',
        'rxjs/fetch',
        'rxjs/testing',
        'rxjs/webSocket',
        // Add further packages you don't need at runtime
    ]

    // Please read our FAQ about sharing libs:
    // https://shorturl.at/jmzH0

});
