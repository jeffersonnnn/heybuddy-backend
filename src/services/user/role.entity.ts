import { Column, Entity, Index, PrimaryColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Permission } from "./permission.entity";
import { User } from "./user.entity";

/**
 * Data object with annotations to configure database in ORM
 */
@Entity()
export class Role {

  @PrimaryColumn()
  public id: string;

  @Column({ nullable: true })
  public description: string;

  @Column({default: false})
  public archived?: boolean;

  @OneToMany((type) => Permission, (permission) => permission.role, {
    cascade: true,
    onDelete: "CASCADE",
  })
  public permissions: Permission[];

  @ManyToMany((type) => User, (user) => user.roles)
  @JoinTable()
  public users: User[];

}
