// Sanu K Joseph
const fs = require('fs');
const path = require('path');

function addCommentToFiles(rootFolder) {
    fs.readdir(rootFolder, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            const filePath = path.join(rootFolder, file);

            fs.stat(filePath, (err, stats) => {
                if (err) throw err;

                if (stats.isFile()) {
                    let comment = '';

                    if (file.endsWith('.html')) {
                        comment = '<!-- Sanu K Joseph -->';
                    } else if (file.endsWith('.css')) {
                        comment = '/* Sanu K Joseph */';
                    } else if (file.endsWith('.js')) {
                        comment = '// Sanu K Joseph';
                    }

                    if (comment) {
                        fs.readFile(filePath, 'utf8', (err, data) => {
                            if (err) throw err;

                            const content = `${comment}\n${data}`;

                            fs.writeFile(filePath, content, 'utf8', (err) => {
                                if (err) throw err;
                                console.log(`Added comment to ${file}`);
                            });
                        });
                    }
                } else if (stats.isDirectory()) {
                    addCommentToFiles(filePath);
                }
            });
        });
    });
}

const rootFolder = '/home/mca/sanu/college-web'; // Change this to the root folder where your files are located

addCommentToFiles(rootFolder);