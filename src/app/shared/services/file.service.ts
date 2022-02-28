import { VampireDarkAgesSheet } from 'src/app/shared/model/vampire-dark-ages/VampireDarkAgesSheet';
import { Inject, Injectable } from '@angular/core';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';
@Injectable()
export class FileService {
  constructor() {}

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
