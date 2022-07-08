import { Module } from '@nestjs/common';
import { GeniusModule } from './_modules/genius/genius.module';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';

@Module({
  imports: [
      GeniusModule,
      // ServeStaticModule.forRoot({
      //     rootPath: join(__dirname, '..', 'front'),
      // }),
  ],


})

export class AppModule {}
