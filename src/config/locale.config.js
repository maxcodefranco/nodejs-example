const i18n = require('i18n');
const path = require('path');


i18n.configure({
    locales: ['pt-BR', 'en'],
    directory: path.join(__dirname, '../app/locales')
})