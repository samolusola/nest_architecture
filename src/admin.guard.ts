import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const requiredRole = UserRole.ADMIN;
    const user = context.switchToHttp().getRequest().user;

    if (!user || user.role !== requiredRole) {
      return false;
    }

    return true;
  }
}
