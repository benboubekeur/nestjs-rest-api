import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";


@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {
  }


  @Post("signin")
  signing(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @Post("signup")
  signup(@Body() dto: AuthDto) {
    console.log(dto.email, dto.password);
    return this.authService.signup(dto);
  }
}