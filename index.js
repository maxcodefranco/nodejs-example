const { app } = require('./src/app'),
    port = getEnv('APP_PORT');

app.listen(port, err => {
    if (err) {
        throw err;
    }
    console.log(`Aplicação iniciada na porta ${port}`);
});