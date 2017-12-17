import { async, ComponentFixture, TestBed  } from '@angular/core/testing';
import { FormsModule  } from '@angular/forms';
import { UserInsertComponent } from './user-insert.component';

describe('UserInsertComponent', () => {
  let component: UserInsertComponent;
  let fixture: ComponentFixture<UserInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule ],
      declarations: [ UserInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
