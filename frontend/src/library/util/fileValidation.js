const imgUploadValidation = (file) => {
   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
   const isLt2M = file.size / 1024 / 1024 < 2;

   if (!isJpgOrPng) {
      return {
         status: 'file_type_error',
         message: 'You can only upload JPG/PNG file!',
      };
   }

   if (!isLt2M) {
      return {
         status: 'file_size_error',
         message: 'Image must smaller than 2MB!',
      };
   }

   return {
      status: 'upload_success',
      message: 'Upload success',
   };
};

const fileUploadValidation = (file) => {
   const isPdf = file.type === 'application/pdf';
   const isLt2M = file.size / 1024 / 1024 < 10;

   if (!isPdf) {
      return {
         status: 'file_type_error',
         message: 'You can only upload PDF file!',
      };
   }

   if (!isLt2M) {
      return {
         status: 'file_size_error',
         message: 'File must smaller than 10MB!',
      };
   }

   return {
      status: 'upload_success',
      message: 'Upload success',
   };
};

export { imgUploadValidation, fileUploadValidation };
