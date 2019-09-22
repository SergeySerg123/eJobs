import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MustMatch } from '../../../_helpers/must-match.validator';
import { AppState } from '../../../store/state/app.states';
import { Store } from '@ngrx/store';
import { AuthServiceClient } from '../../../services/auth-client.service';
import { AnimationPlayer, style, animate, AnimationBuilder } from '@angular/animations';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  errorMessage: string = null;
  registerForm: FormGroup;
  submitted = false;
  loading: boolean = false;
  showSpinner: boolean = false;
  showForms: boolean = true;

  private windowPlayer: AnimationPlayer;

  @ViewChild('windowState') windowRef: ElementRef;

  constructor(private authServiceClient: AuthServiceClient,
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private animationBuilder: AnimationBuilder) {
    this.store.subscribe(store => {
      if (this.loading && !store.auth.loading) { this.loadingEmmiter() };

      this.loading = store.auth.loading;
      this.errorMessage = store.auth.errorMessage;
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      role: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const payload = {
      email: this.registerForm.value.email,
      name: this.registerForm.value.name,
      role: this.registerForm.value.role,
      password: this.registerForm.value.password
    }

    this.authServiceClient.SignUp(payload);
  }

  hasSignUpError(): boolean {
    return this.errorMessage !== null;
  }

  // creation animation player
  private createPlayers() {
    if (this.windowPlayer) {
      this.windowPlayer.destroy();
    }

    let animationWindowFactory;

    if (!this.loading) {
      animationWindowFactory = this.animationBuilder.build([
        style('*'),
        animate(200, style({ height: '250px' }))
      ]);
    } else {
      animationWindowFactory = this.animationBuilder.build([
        style({ height: '250px' }),
        animate(100, style('*'))
      ]);
    }
    this.windowPlayer = animationWindowFactory.create(this.windowRef.nativeElement);
  }

  // Emmit loading 
  loadingEmmiter() {
    this.createPlayers();

    if (!this.showForms) {
      this.windowPlayer.onDone(() => {
        this.showForms = !this.showForms;
      });
    } else {
      this.windowPlayer.onStart(() => {
        this.showForms = !this.showForms;
      });
    }
    this.windowPlayer.play();
    this.showSpinner = !this.showSpinner;
  }

}
