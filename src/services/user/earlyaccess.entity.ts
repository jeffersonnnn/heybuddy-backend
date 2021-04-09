import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, Index } from "typeorm";
import { Role } from "./role.entity";

/**
 * Data object with annotations to configure database in ORM
 */
@Entity()
export class EarlyAccess {

  @PrimaryGeneratedColumn("uuid")
  public id: string;

  // @Column()
  // public firstName: string;

  @Column({ unique: true })
  public email: string;

  @Column({ default: false })
  public archived?: boolean;

  @ManyToMany((type) => Role, (role) => role.users)
  public roles?: Role[];

}
