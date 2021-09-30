const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/my-app-ang-material/runtime.js',
        './dist/my-app-ang-material/polyfills.js',
        './dist/my-app-ang-material/scripts.js',
        './dist/my-app-ang-material/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/dialog-box.js');
    await fs.copyFile('./dist/my-app-ang-material/styles.css', 'elements/styles.css')
    await fs.copy('./dist/my-app-ang-material/assets/', 'elements/assets/' )

})();