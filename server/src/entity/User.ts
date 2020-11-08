import { Field, ObjectType } from "type-graphql";
import { Entity, Column, ManyToMany, Index } from "typeorm";
import AbstractBaseEntity from "./AbstractBaseEntity";
import { Group } from "./Group";
import { UserRole } from "./UseRole";

@Entity()
@ObjectType({ description: "General database" })
export class User extends AbstractBaseEntity {
  @Column()
  @Field()
  firstName!: string;

  @Column()
  @Field()
  lastName!: string;

  @Column({ unique: true })
  @Index()
  @Field()
  username!: string;

  @Column()
  password!: string;

  @Column({ unique: true })
  token: string;

  @Column({
    type: "enum",
    enum: [UserRole.ADMIN, UserRole.STUDENT, UserRole.TEACHER],
    nullable: true,
    default: UserRole.STUDENT,
  })
  @Field(() => UserRole)
  role: UserRole;

  @ManyToMany(() => Group)
  @Field(() => [Group])
  groups: Group[];
}
