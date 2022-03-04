import { Injectable } from '@angular/core';

@Injectable()
export class FileService {

  mapFileToSheetObject(event: any, callback: (object: any) => void): boolean {
    let fileProcessed = false;
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");

    fileReader.onload = () => {
      const fileObject: any = JSON.parse(fileReader.result as string);
      callback(fileObject);
      fileProcessed = true;
    }

    fileReader.onerror = (error) => {
      console.error(error);
      fileProcessed = false;
    }

    return fileProcessed;
  }
}
