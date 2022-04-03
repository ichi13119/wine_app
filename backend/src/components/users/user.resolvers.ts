import { Query, Resolver } from '@nestjs/graphql';

import { UserModel } from './interfaces/users.model';

@Resolver((of) => UserModel)
export class UsersResolver {
  constructor() {
    // do nothing
  }

  @Query(() => [UserModel], { name: 'users', nullable: 'itemsAndList' })
  async getUsers() {
    return [
      { id: '1', name: 'user 1' },
      { id: '2', name: 'user 2' },
    ];
  }
}
