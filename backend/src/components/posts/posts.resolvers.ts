import { Query, Resolver } from '@nestjs/graphql';

import { PostModel } from './interfaces/posts.model';

@Resolver((of) => PostModel)
export class PostsResolver {
  @Query(() => [PostModel], { name: 'posts', nullable: 'itemsAndList' })
  async getPosts() {
    return [
      { id: '1', title: 'post 1', type: { id: '1', name: 'white' } },
      { id: '2', title: 'post 2', type: { id: '2', name: 'red' } },
    ];
  }
}
