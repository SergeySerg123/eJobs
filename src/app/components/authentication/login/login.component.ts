import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthServiceClient } from '../../../services/auth-client.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.states';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { delay } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  errorMessage: string = null;
  loading: boolean = false;
  showSpinner: boolean = false;
  showForms: boolean = true;

  private windowPlayer: AnimationPlayer;

  @ViewChild('windowState') windowRef: ElementRef;

  constructor(
    private authServiceClient: AuthServiceClient,
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private animationBuilder: AnimationBuilder
  ) {
    this.store.subscribe(store => {
      //Loading spinner emmiter
      if (this.loading && !store.auth.loading) { this.loadingEmmiter() };

      this.loading = store.auth.loading;
      this.errorMessage = store.auth.errorMessage;
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  //On submit form
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const payload = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    }
    this.loadingEmmiter();
    delay(1000).then(() => { this.authServiceClient.LogIn(payload) });   
  }

  // Has errors after on submit
  hasAuthErrors(): boolean {
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
