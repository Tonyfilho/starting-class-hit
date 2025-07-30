import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from "@angular/forms";




export const passwordVerification = (): ValidatorFn => {
  /**Regex de senha 2 Min Upcases, Min 2 Downcases, Min 2 numeros e Min 2 caracteres especiais */
  const rightPassword: RegExp = /^.*([A-Z].*){2,}.*([a-z].*){2,}.*(\d.*){2,}.*([!@#$%^&*()\-_=+{}[\]:;"'<>,.?/\\|].*){2,}.*$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const localPassword = control.value;
    // console.log("Password", localPassword);

    if (!localPassword) {
      return null;
    }
    // Retorna erro se regex falhar
    if (!rightPassword.test(localPassword)) {
      // console.log("invalid Password");
      return { invalidPassword: true }
    }


    return null;  // senha valida
  }



}

/**permitindo apenas os domínios @atec.pt, @cinel.pt e @cesae.pt: */
export function emailVerification(): ValidatorFn {
  const email: RegExp = /^[a-zA-Z0-9._%+-]+@(atec|cinel|cesae)\.pt$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const localPassword = control.value;

    if (!localPassword) {
      return null;
    }
    if (!email.test(localPassword)) {
      return { invalidEmail: true }
    }


    return null;  // senha valida
  }



}
/**Letras maiúsculas e minúsculas (A-Z, a-z), Letras com acentos
 * (á, é, í, ó, ú, ç, etc.) Espaços (para nomes compostos como "João da Silva") */
export const correctName = (): ValidatorFn => {
  /**Letras maiúsculas e minúsculas */
  const rightName: RegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const localName = control.value;
    if (!localName) {
      return null;
    }
    if (!rightName.test(localName)) {
      return { invalidName: true }
    }

    return null;


  }
}


export const justNumbersLettersDot = (): ValidatorFn => {
  const justNumbesLetters: RegExp = /^(?!^[\p{L}\p{M}.ºª ]+$)([\p{L}\p{M}0-9.ºª ]+)$/u;
  return (control: AbstractControl): ValidationErrors | null => {
    const localNumbersLettersValue = control.value;
    if (!localNumbersLettersValue) {
      return null;
    }
    if (justNumbesLetters.test(localNumbersLettersValue)) {
      return null;
    }
    return { invalidNumberOrLetter: true }
  }

}
export const justNumbers = (): ValidatorFn => {
  /**checa numeros, permite espaço " ", e o traço "-" */
  const justNumbers: RegExp = /^(?=(?:[0-9-]*[0-9]){10,15}$)[0-9-]+$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const localNumbersValue = control.value;
    if (!localNumbersValue) {
      return null;
    }
    if (justNumbers.test(localNumbersValue)) {
      return null;
    }
    return { invalidNumbers: true }
  }

}

export const isMatch = (): ValidatorFn => {

  return (control: AbstractControl): ValidationErrors | null => {
    // Verifica se o controle é um FormArray
    if (!(control instanceof FormArray)) {
      return null; // Não é um FormArray, ignora a validação
    }
    const formArray = control as FormArray;
    const firstValue = formArray.at(0)?.value; // Pega o valor do primeiro campo
    // console.log("firstValue: ", firstValue);
    const allMatch = formArray.controls.every(
      (ctrl) => ctrl.value === firstValue // Compara cada campo com o primeiro
    );
    //  console.log("allMatch: ", allMatch);
    // Se algum for diferente, retorna o erro
    if (!allMatch && firstValue !== null && firstValue !== undefined) {
      return { invalidMatch: true };
    }
    return null;
  }

}
