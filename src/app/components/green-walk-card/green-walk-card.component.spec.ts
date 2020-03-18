import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GreenWalkCardComponent } from './green-walk-card.component';

describe('GreenWalkCardComponent', () => {
  let component: GreenWalkCardComponent;
  let fixture: ComponentFixture<GreenWalkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenWalkCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GreenWalkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
