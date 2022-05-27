import { Body, Controller, Get, Patch, UseGuards } from "@nestjs/common";
import { JwtGuard } from "../auth/guard";
import { GetUser } from "../auth/decorator/get-user.decorator";


import { User } from "@prisma/client";
import { EditUserDto } from "./dto";
import { UserService } from "./user.service";

@UseGuards(JwtGuard)
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {
  }

  @Get("me")
  getMe(@GetUser() user: User) {
    console.warn(user);
    return user;
  }

  @Patch()
  editUser(
    @GetUser("id") userId: number,
    @Body() dto: EditUserDto
  ) {
    return this.userService.editUser(userId, dto);
  }
}

