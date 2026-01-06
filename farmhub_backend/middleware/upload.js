const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => ({
    folder: req.body.folder || 'farmhub',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    public_id: `${Date.now()}-${file.originalname}`,
  }),
});

const upload = multer({ storage });

module.exports = upload;
