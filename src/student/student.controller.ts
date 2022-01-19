import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { Student, StudentDocument } from './schemas/student.schema';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  // @Get('/:studentId')
  // getStudentById(
  //   @Param('studentId', new ParseUUIDPipe()) studentId: string,
  // ): FindStudentResponseDto {
  //   return this.studentService.getStudentById(studentId);
  // }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string): Promise<Student> {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): Promise<Student> {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.updateStudent(body, studentId);
  }
}
