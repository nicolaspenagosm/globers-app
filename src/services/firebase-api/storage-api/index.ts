import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storageInstance } from "./base";
import { handleErrorResponse } from "../../../utils/erros";

export const storageAPI = {
  uploadFile: (userId: string, file: File) => {
    const imageRef = ref(storageInstance, `usersProfileImages/${userId}`);
    return new Promise<string>((resolve) => {
      uploadBytes(imageRef, file)
        .then(() => {
          getDownloadURL(imageRef)
            .then((downloadURL: string) => {
              resolve(downloadURL);
            })
            .catch((error) => handleErrorResponse(error));
        })
        .catch((error) => handleErrorResponse(error));
    });
  },
};
