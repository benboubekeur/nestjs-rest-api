import {Injectable} from "@nestjs/common";

@Injectable({})
export class AuthService {
    login() {
        return 'I have logged in '

    }

    signup() {
        return 'I have SignUp !!'
    }
}