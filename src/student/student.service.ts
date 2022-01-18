import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import { v4 as uuid } from 'uuid';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDto {
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuid(),
      ...payload,
    };

    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(payload: UpdateStudentDto, id: string): StudentResponseDto {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === id) {
        updatedStudent = {
          id,
          ...payload,
        };
        return updatedStudent;
      } else return student;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }

  getStudentsByTeacherId(teacherId: string): FindStudentResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher;
    });
  }
}
