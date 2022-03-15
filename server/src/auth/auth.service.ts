
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PasswordService } from './password.service';
// @ts-ignore
// eslint-disable-next-line
import { UserService } from '../user/user.service';
import { UserInfo } from './UserInfo';
import { TokenService } from "./token.service";
import { JwtService } from '@nestjs/jwt';
import { Credentials } from "./Credentials";


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly passwordService: PasswordService,
    private jwtService: JwtService
    //private readonly tokenService: TokenService
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
  async login(credentials: Credentials): Promise<UserInfo> {
    const { username, password } = credentials;
    const user = await this.validateUser(
      credentials.username,
      credentials.password
    );
    if (!user) {
      throw new UnauthorizedException("The passed credentials are incorrect");
    }
    //@ts-ignore
    const accessToken = await this.tokenService.createToken(username, password);
    return {
      accessToken,
      ...user,
    };
  }
}
