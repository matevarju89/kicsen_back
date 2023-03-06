import { Module, Scope } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { UserModule } from './user/user.module';
import { RecipeModule } from './recipe/recipe.module';
import { RatingModule } from './rating/rating.module';
import { FamilyModule } from './family/family.module';
import { ImageModule } from './image/image.module';
import { SmartTagModule } from './smartTag/smartTag.module';
import { ACLModule } from './auth/acl.module';
import { AuthModule } from './auth/auth.module';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './prisma/prisma.module';
import { SecretsManagerModule } from './providers/secrets/secretsManager.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ServeStaticOptionsService } from './serveStaticOptions.service';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  controllers: [],
  imports: [
    UserModule,
    RecipeModule,
    RatingModule,
    FamilyModule,
    ImageModule,
    SmartTagModule,
    ACLModule,
    AuthModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get('GRAPHQL_PLAYGROUND');
        const introspection = configService.get('GRAPHQL_INTROSPECTION');
        return {
          autoSchemaFile: 'schema.graphql',
          sortSchema: true,
          playground,
          //introspection: playground || introspection,
          introspection: true,
          useGlobalPrefix: true,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule {}
