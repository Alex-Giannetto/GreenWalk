import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyGreenWalksPage } from './my-green-walks.page';

describe('MyGreenWalksPage', () => {
  let component: MyGreenWalksPage;
  let fixture: ComponentFixture<MyGreenWalksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGreenWalksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyGreenWalksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
