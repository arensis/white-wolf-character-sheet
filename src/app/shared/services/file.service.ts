import { VampireDarkAgesSheet } from 'src/app/shared/model/vampire-dark-ages/VampireDarkAgesSheet';
import { Inject, Injectable } from '@angular/core';
import { CharacterSheetStoreService } from 'src/app/vampire-dark-age/services/character-sheet-store.service';
@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private characterSheetStoreService: CharacterSheetStoreService) {}

  mapFileToVampireDarkAgesSheet(event: any): boolean {
    let fileProcessed = false;
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");

    fileReader.onload = () => {
      const characterSheet: VampireDarkAgesSheet = JSON.parse(fileReader.result as string);
      this.characterSheetStoreService.updateCharacterSheet(characterSheet);
      fileProcessed = true;
    }
    fileReader.onerror = (error) => {
      console.error(error);
      fileProcessed = false;
    }

    return fileProcessed;
  }
}
