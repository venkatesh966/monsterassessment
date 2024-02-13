import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { encrypt, decrypt } from '../utils/encrypt-decrypt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(res => {
    
      sessionStorage.clear();
     
      const encrptedData = encrypt(res.user?.uid || "")
      sessionStorage.setItem('token', encrptedData);

      if (res.user?.emailVerified == true) {
        this.redirectToDashboard()
      } else {
        this.router.navigate(['/email-verification']);
      }

    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(res => {
      alert('Registration Successful');
      this.sendEmailForVerification(res.user);
      // this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // sign out
  logout() {
    this.fireauth.signOut().then(() => {
      sessionStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  redirectToDashboard() {
    this.router.navigate(['dashboard']);
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  sendEmailForVerification(user: any) {
    console.log(user);
    user.sendEmailVerification().then((res: any) => {
      this.router.navigate(['/email-verification']);
    }, (err: any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }

  async checkAuthentication(): Promise<boolean> {
    const uidFromSessionStorage = sessionStorage.getItem('token');
    
    if (!uidFromSessionStorage) {
      return false; 
    }

    const decryptedData = decrypt(uidFromSessionStorage)

    return new Promise<boolean>((resolve, reject) => {
      this.fireauth.authState.subscribe(currentUser => {
        if (currentUser && decryptedData === currentUser.uid) {
          resolve(true); 
        } else {
          resolve(false); 
        }
      });
    });
  }

 
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {
      this.router.navigate(['/dashboard']);
      sessionStorage.setItem('token', JSON.stringify(res.user?.uid));
    }, err => {
      alert(err.message);
    })
  }

}
