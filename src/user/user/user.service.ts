import { Injectable } from '@nestjs/common';
import { Connection } from '../connection/connection';

@Injectable()
export class UserService {
  constructor(private connection: Connection) {}
  sayHello(name: string): string {
    return `Hello ${name}, koneksi DB: ${this.connection.getName()}`;
  }
}
