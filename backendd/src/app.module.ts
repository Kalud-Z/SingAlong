import { Module } from '@nestjs/common';
import { GeniusModule } from './_modules/genius/genius.module';

@Module({
  imports: [
      GeniusModule
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {}
