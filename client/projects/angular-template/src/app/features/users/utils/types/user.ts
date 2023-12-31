import {FormControl, FormGroup} from "@angular/forms";
import {RoleType} from "@core";

export interface UserForm extends FormGroup {
	controls: {
		firstName: FormControl<string>
		lastName: FormControl<string>
		email: FormControl<string>
		username: FormControl<string>
		password: FormControl<string>
		roles: FormControl<RoleType>
	}
}

export interface UserFormModel {
	firstName: string
	lastName: string
	email: string
	username: string
	password: string
	roles : RoleType;
	id : number;
}

