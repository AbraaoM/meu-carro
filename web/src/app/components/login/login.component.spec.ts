import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have a username input field', () => {
    const usernameInput = fixture.nativeElement.querySelector('input[name="userEmail"]');
    expect(usernameInput).toBeTruthy();
  });

  it('should have a password input field', () => {
    const passwordInput = fixture.nativeElement.querySelector('input[name="password"]');
    expect(passwordInput).toBeTruthy();
  });

  it('should have a login button', () => {
    const loginButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(loginButton).toBeTruthy();
  });

  // it('should emit an event when the login button is clicked', () => {
  //   const loginButton = fixture.nativeElement.querySelector('button[type="submit"]');
  //   const spy = spyOn(component.login, 'emit');
  //   loginButton.click();
  //   fixture.detectChanges();
  //   expect(spy).toHaveBeenCalled();
  // });

  // Você pode adicionar mais testes aqui para validar a lógica do seu componente de login.
});
