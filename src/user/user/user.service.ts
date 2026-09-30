import { Injectable, ValidationError } from '@nestjs/common';
import { Connection } from '../connection/connection';
import { ValidationService } from '../../validation/validation/validation.service';
import z from 'zod';

@Injectable()
export class UserService {
  constructor(
    private connection: Connection,
    private validationService: ValidationService,
  ) {}
  sayHello(name: string): string {
    const schema = z.string().min(3).max(100);
    const result = this.validationService.validate(schema, name);
    return `Hello ${result}, koneksi DB: ${this.connection.getName()}`;
  }
}
