import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ValidStudentMiddleware } from '../common/middleware/validStudent.middleware';
import { Student, StudentSchema } from './schemas/student.schema';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
// export class StudentModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(ValidStudentMiddleware).forRoutes({
//       path: 'students/:studentId',
//       method: RequestMethod.GET,
//     });
//     consumer.apply(ValidStudentMiddleware).forRoutes({
//       path: 'students/:studentId',
//       method: RequestMethod.PUT,
//     });
//   }
// }
export class StudentModule {}
