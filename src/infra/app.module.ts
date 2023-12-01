import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from '@/infra/prisma/prisma.service'
import { envSchema } from './env'
import { AuthModule } from '@/infra/auth/auth.module'
import { AuthenticateController } from './http/controllers/authenticate-controller'
import { CreateUserController } from './http/controllers/create-user.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [CreateUserController, AuthenticateController],
  providers: [PrismaService],
})
export class AppModule {}
