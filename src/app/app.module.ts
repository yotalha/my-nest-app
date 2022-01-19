import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    StudentModule,
    MongooseModule.forRoot(
      'mongodb+srv://batman_123:nfT3Hyba@cluster0.emnwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
