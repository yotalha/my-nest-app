import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseUUIDPipe,
} from '@nestjs/common';
import { FindStudentResponseDto } from 'src/student/dto/student.dto';
import {
  CreateTeacherDto,
  FindTeacherResponseDto,
  TeacherResponseDto,
} from 'src/student/dto/teacher.dto';
import { StudentService } from 'src/student/student.service';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(
    private readonly teacherService: TeacherService,
    private readonly studentService: StudentService,
  ) {}

  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindTeacherResponseDto {
    return this.teacherService.getTeacherById(teacherId);
  }

  @Get('/:teacherId/students')
  getStudents(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindStudentResponseDto[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Post()
  createTeacher(@Body() body: CreateTeacherDto): TeacherResponseDto {
    return this.teacherService.createTeacher(body);
  }
}
