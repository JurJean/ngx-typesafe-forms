import {
  AbstractControlOptions as AngularAbstractControlOptions,
  ValidationErrors
} from '@angular/forms';
import { Observable } from 'rxjs';

import { AbstractControl } from './abstract-control';

export type ValidatorFn<T> =
  ((control: AbstractControl<T>) => ValidationErrors | null) |
  ((control: AbstractControl<T | null>) => ValidationErrors | null);

export type AsyncValidatorFn<T> =
  ((control: AbstractControl<T>) => Promise<ValidationErrors | null> | Observable<ValidationErrors | null>) |
  ((control: AbstractControl<T | null>) => Promise<ValidationErrors | null> | Observable<ValidationErrors | null>);

export interface AbstractControlOptions<T> extends AngularAbstractControlOptions {
  validators?: ValidatorFn<T> | ValidatorFn<T>[] | null;
  asyncValidators?: AsyncValidatorFn<T> | AsyncValidatorFn<T>[] | null;
}
