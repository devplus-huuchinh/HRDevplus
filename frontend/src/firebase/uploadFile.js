import { storage } from '../library/firebase/firebase';
import { v4 as uuidv4 } from 'uuid';

const uploadFile = async (options) => {
   return new Promise((resolve, reject) => {
      const { file, directory, onSuccess, onError } = options;

      const uniqueName = uuidv4();

      const uploadTask = storage.ref(`${directory}/${uniqueName}`).put(file);

      uploadTask.on(
         'state_changed',
         (snapshot) => {
            const progress =
               (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            console.log('Upload is ' + progress + '% done');
         },
         (error) => {
            console.log(error);
            reject();
         },
         () => {
            storage
               .ref(directory)
               .child(uniqueName)
               .getDownloadURL()
               .then((url) => {
                  onSuccess(null, url);
                  resolve(url);
               })
               .catch((error) => {
                  console.log(error);
                  onError();
               });
         }
      );
   });
};

export default uploadFile;
