import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {
  }

  signup() {

    return "I have SignUp !!";
  }

  login() {

    return "I have logged in ";

  }
}