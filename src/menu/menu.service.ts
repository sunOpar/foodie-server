import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  getAll() {
    return 'menus';
  }
}
