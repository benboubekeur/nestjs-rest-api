import { Controller, Get, Patch, UseGuards } from "@nestjs/common";
import { JwtGuard } from "../auth/guard";
import { GetUser } from "../auth/decorator/get-user.decorator";


import { User } from "@prisma/client";

@UseGuards(JwtGuard)
@Controller("users")
export class UserController {

  @Get("me")
  getMe(@GetUser() user: User) {
    console.warn(user);
    return user;
  }

  @Patch()
  editUser(
    @GetUser("id") userId: number
    //@Body() dto: EditUserDto,
  ) {
    //return this.userService.editUser(userId, dto);
  }
}

