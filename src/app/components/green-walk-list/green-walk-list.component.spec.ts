import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GreenWalkListComponent } from './green-walk-list.component';

describe('GreenWalkListComponent', () => {
  let component: GreenWalkListComponent;
  let fixture: ComponentFixture<GreenWalkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenWalkListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GreenWalkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
