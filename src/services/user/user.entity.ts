import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, Index } from "typeorm";
import { Role } from "./role.entity";

/**
 * Data object with annotations to configure database in ORM
 */
@Entity()
export class User {

  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ nullable: true })
  public firstName: string;

  @Column({ nullable: true })
  public lastName: string;

  @Column({ unique: true })
  public email: string;

  @Column({ nullable: true })
  public password?: string;

  @Column({ nullable: true })
  public avatar?: string;

  @Column({ nullable: true })
  public country?: string;

  @Column({ nullable: true })
  public timeZone?: string;

  @Column({ nullable: true })
  public language?: string;

  @Column({ nullable: true })
  public ip?: string;

  @Column({ nullable: true })
  public age?: number;

  public surrogateEnabled?: boolean;

  public surrogatePrincipal?: User;

  @Column({ default: false })
  public archived?: boolean;

  @ManyToMany((type) => Role, (role) => role.users)
  public roles?: Role[];

}
