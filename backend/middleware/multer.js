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

// import multer from 'multer';

// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// // File type validation
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ['application/pdf', 'video/mp4', 'video/mkv', 'video/avi'];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error('Invalid file type. Only PDFs and videos are allowed.'));
//   }
// };

// // Multer upload configuration with file size limit and type validation
// const upload = multer({
//   storage,
//   limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
//   fileFilter,
// });

// export { upload };

