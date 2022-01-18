import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db';
import {} from 'src/student/dto/student.dto';
import { v4 as uuid } from 'uuid';
import {
  CreateTeacherDto,
  FindTeacherResponseDto,
  TeacherResponseDto,
} from 'src/student/dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;
  getTeachers(): FindTeacherResponseDto[] {
    return this.teachers;
  }

  getTeacherById(teacherId: string): FindTeacherResponseDto {
    return this.teachers.find((teacher) => {
      return teacher.id === teacherId;
    });
  }

  createTeacher(payload: CreateTeacherDto): TeacherResponseDto {
    const newTeacher = {
      id: uuid(),
      ...payload,
    };
    this.teachers.push(newTeacher);
    return newTeacher;
  }
}
