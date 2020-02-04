import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export class PasswordValidators {
    static invalidOldPasswordMatch(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if(control.value !== "1234")
                resolve({invalidOldPasswordMatch: true});
            else
                resolve(null);
        })
    }

    static newAndCurrentPassword(control: AbstractControl) : ValidationErrors | null {
        let newPasswordFormGroup = control as FormGroup;
        let newPassword = newPasswordFormGroup.get('newPassword');
        let confirmPassword = newPasswordFormGroup.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value)
            return { newAndCurrentPassword: true };

        return null;
    }
}