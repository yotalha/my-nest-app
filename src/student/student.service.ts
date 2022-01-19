import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { Student, StudentDocument } from './schemas/student.schema';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  students = null;

  async getStudents(): Promise<Student[]> {
    return await this.studentModel.find();
  }

  async getStudentById(id: string): Promise<Student> {
    return await this.studentModel.findById(id);
  }

  // createStudent(payload: CreateStudentDto): StudentResponseDto {
  //   const newStudent = {
  //     id: uuid(),
  //     ...payload,
  //   };

  //   this.students.push(newStudent);
  //   return newStudent;
  // }

  async createStudent(payload: CreateStudentDto): Promise<Student> {
    const createdStudent = new this.studentModel(payload);
    return createdStudent.save();
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
