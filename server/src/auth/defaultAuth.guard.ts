//import { BasicAuthGuard } from "./basic/basicAuth.guard";
import { JwtAuthGuard } from './jwt/jwtAuth.guard';

export class DefaultAuthGuard extends JwtAuthGuard {}
