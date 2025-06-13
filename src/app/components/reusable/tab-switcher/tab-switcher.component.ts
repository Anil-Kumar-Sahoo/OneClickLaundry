import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
  WritableSignal,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-switcher.component.html',
  styleUrls: ['./tab-switcher.component.css']
})
export class TabSwitcherComponent implements AfterContentInit {
  @ContentChildren('tabLabel') tabLabels!: QueryList<any>;
  @ContentChildren('tabContent') tabContents!: QueryList<any>;

  activeIndex: WritableSignal<number> = signal(0);

  ngAfterContentInit(): void {
    if (this.tabLabels.length === 0 || this.tabContents.length === 0) {
      console.warn('No tab labels or tab content found.');
    }
  }

  setActive(index: number): void {
    this.activeIndex.set(index);
  }
}
