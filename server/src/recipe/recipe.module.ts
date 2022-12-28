import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RecipeModuleBase } from './base/recipe.module.base';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { RecipeResolver } from './recipe.resolver';
const bodyParser = require('body-parser');

@Module({
  imports: [RecipeModuleBase],
  controllers: [RecipeController],
  providers: [RecipeService, RecipeResolver],
  exports: [RecipeService],
})
export class RecipeModule {}
/*export class RecipeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(bodyParser.urlencoded({ extended: false }), bodyParser.json())
      .forRoutes('/');
  }
}*/
