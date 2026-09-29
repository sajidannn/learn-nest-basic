import { Injectable } from '@nestjs/common';

export class Connection {
  getName(): string {
    return '';
  }
}

@Injectable()
export class MySqlConnection extends Connection {
  getName(): string {
    return 'MySql';
  }
}

@Injectable()
export class MongDBConnection extends Connection {
  getName(): string {
    return 'MongoDB';
  }
}
