import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VampireDarkAgesSheetStoreService } from 'src/app/shared/services/vampire-dark-ages-sheet-store.service';
import {
  CREATION_STEPS,
  CreationStateService,
  CreationStep,
} from './services/creation-state.service';

@Component({
  selector: 'arm-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss'],
})
export class CreatorComponent implements OnInit {
  steps = CREATION_STEPS;
  currentIndex = 0;

  constructor(
    public state: CreationStateService,
    private sheetStore: VampireDarkAgesSheetStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.state.reset();
    this.currentIndex = 0;
  }

  get currentStep(): CreationStep {
    return this.steps[this.currentIndex];
  }

  get isLastStep(): boolean {
    return this.currentIndex === this.steps.length - 1;
  }

  get canAdvance(): boolean {
    return this.state.isStepComplete(this.currentStep);
  }

  goTo(index: number): void {
    // Only allow jumping back, or forward when every prior step is complete.
    if (index <= this.currentIndex) {
      this.setIndex(index);
      return;
    }
    for (let i = this.currentIndex; i < index; i++) {
      if (!this.state.isStepComplete(this.steps[i])) {
        return;
      }
    }
    this.setIndex(index);
  }

  next(): void {
    if (this.canAdvance && !this.isLastStep) {
      this.setIndex(this.currentIndex + 1);
    }
  }

  back(): void {
    if (this.currentIndex > 0) {
      this.setIndex(this.currentIndex - 1);
    }
  }

  private setIndex(index: number): void {
    this.currentIndex = index;
    // Leaving the finishing step invalidates the freebie baseline so it is
    // recomputed cleanly if the player edits earlier steps and returns.
    if (this.currentStep !== 'finishing') {
      this.state.invalidateFreebies();
    }
  }

  finish(): void {
    if (!this.canAdvance) {
      return;
    }
    this.sheetStore.loadVampireDASheet(this.state.build());
    this.router.navigate(['/vampire-dark-ages']);
  }
}
