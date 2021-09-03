import Compressor from 'compressorjs';

const getDataURIFromFileList = (files: FileList) => {
  return new Promise((resolve: (value: string) => void, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      if (!e.target || typeof e.target.result !== 'string') return;
      resolve(e.target.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
    const file = files[0];
    if (file) {
      fileReader.readAsDataURL(file);
    }
  });
};

const getDataURIFromBlob = (blobImage: Blob) => {
  return new Promise((resolve: (value: string) => void, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      if (!e.target || typeof e.target.result !== 'string') return;
      resolve(e.target.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };

    if (file) {
      fileReader.readAsDataURL(blobImage);
    }
  });
};

const compressImage = (files: FileList, options: Compressor.Options) => {
  const file = files[0];
  return new Compressor(file, options);
};

const file = {
  getDataURIFromFileList,
  getDataURIFromBlob,
  compressImage,
};

export default file;
