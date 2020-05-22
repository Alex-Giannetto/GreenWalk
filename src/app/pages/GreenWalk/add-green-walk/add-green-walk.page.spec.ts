import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { AddGreenWalkPage } from './add-green-walk.page'

describe('AddGreenWalkPage', () => {
  let component: AddGreenWalkPage;
  let fixture: ComponentFixture<AddGreenWalkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGreenWalkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddGreenWalkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
