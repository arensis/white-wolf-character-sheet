import { VampireDarkAgesSheet } from 'src/app/vampire-dark-age/model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import * as fromActions from "../../vampire-dark-age/stores/sheet-store/actions/vampire-da-sheet.actions"
import * as sheetSelectors from "../../vampire-dark-age/stores/sheet-store/selectors/vampire-da-sheet.selector";

@Injectable()
export class VampireDarkAgesSheetStoreService {
  constructor(private store: Store<VampireDarkAgesSheet>) {}

  public loadVampireDASheet(params: any): void {
    this.store.dispatch(new fromActions.LoadVampireDASheetAction(params));
  }

  public selectVampireDASheet(): Observable<VampireDarkAgesSheet> {
    return this.store.select(sheetSelectors.getVampireDASheetState).pipe(map((body:VampireDarkAgesSheet) => body));
  }
}
