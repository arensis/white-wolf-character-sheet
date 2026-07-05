import { VampireMasqueradeSheet } from 'src/app/vampire-masquerade/model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheet';
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import * as fromActions from "../stores/sheet-store/actions/vampire-vtm-sheet.actions"
import * as sheetSelectors from "../stores/sheet-store/selectors/vampire-vtm-sheet.selector";

@Injectable()
export class VampireMasqueradeSheetStoreService {
  constructor(private store: Store<VampireMasqueradeSheet>) {}

  public loadVampireVTMSheet = (params: any): void => {
    this.store.dispatch(new fromActions.LoadVampireVTMSheetAction(params));
  }

  public selectVampireVTMSheet(): Observable<VampireMasqueradeSheet> {
    return this.store.select(sheetSelectors.getVampireVTMSheetState).pipe(map((body: VampireMasqueradeSheet) => body));
  }
}
