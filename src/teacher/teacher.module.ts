import { Module } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
  imports: [],
  controllers: [TeacherController],
  providers: [TeacherService, StudentService],
})
export class TeacherModule {}
