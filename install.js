const Fs = require('fs');
if(!Fs.existsSync('.gitignore')) {

    Fs.readdir('dist', (err, files) => {

        files.forEach(file => {

            Fs.renameSync('dist/' + file, '../' + file, {mkdirp: true});

        });
    });

    Fs.unlinkSync('dist');
    Fs.unlinkSync('src');

    console.log('cleaning up')
}
