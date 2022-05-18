import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { JwtGuard } from "../auth/guard";


@Controller("users")
export class UserController {

  @UseGuards(JwtGuard)
  @Get("me")
  getMe(@Request() req) {
    console.warn(req.user);
    return req.user;
  }
}

