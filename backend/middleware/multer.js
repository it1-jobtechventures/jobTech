import multer from 'multer'
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);  // Unique file name
  },
});
// Multer upload configuration
const upload = multer({ storage , limits :10 * 1024 * 1024  });

export {upload}
