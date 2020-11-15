import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions/decorators/InjectRepository";
import { User } from "../entity/User";

@Resolver(() => User)
export default class UserResolver {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  @Query(() => User, { nullable: true })
  async user(
    @Arg("userId", () => String)
    userId: string
  ): Promise<User> {
    return this.userRepository.findOne(userId);
  }

  @Query(() => [User])
  async users() {
    return this.userRepository.find();
  }

  @FieldResolver()
  async roles(@Root() { roles }: User): Promise<string[]> {
    return (await roles).map((role) => role.name);
  }
}
