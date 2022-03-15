import { Injectable } from '@nestjs/common';
import { PasswordService } from './password.service';
// @ts-ignore
// eslint-disable-next-line
import { UserService } from '../user/user.service';
import { UserInfo } from './UserInfo';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly passwordService: PasswordService,
    private jwtService: JwtService
  ) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<UserInfo | null> {
    const user = await this.userService.findOne({
      where: { username },
    });
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { roles } = user;
      const payload = { username: user.username };
      return { accessToken: this.jwtService.sign(payload), username, roles };
    }
    return null;
  }
}
