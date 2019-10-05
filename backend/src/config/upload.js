const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const fileExtension = path.extname(file.originalname);
            const fileName = path.basename(file.originalname, fileExtension);

            cb(null, `${fileName}-${Date.now()}${fileExtension}`)
        },
    }),
}