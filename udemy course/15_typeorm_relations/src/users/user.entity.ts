import { Report } from 'src/reports/report.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// these are called hook in typeorm
/*
  Notes: if we call save with a plain object, hooks will not be executed
  if we call save with the object that is created by create() method, 
  hooks will be executed

  same with remove(). In TypeORM, save() and remove() are expected 
  to be call with entity instances, not plain object
*/
import { AfterInsert, AfterRemove, AfterUpdate } from 'typeorm';
// import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  // @Exclude() helps excluding the property when the user entity is
  // returned in the response
  // @Exclude()
  @Column()
  password: string;

  // Association is not automatically fetched when we fetch an User
  // The reasoning of these arguments, see video 133. For now, just
  // know it is the way it is
  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  // function will run after a new record is inserted into the DB
  @AfterInsert()
  logInsert() {
    console.log(`Inserted User with id ${this.id}`);
  }

  // function will run after a new record is updated in the DB
  @AfterUpdate()
  logUpdate() {
    console.log(`Updated user with id ${this.id}`);
  }

  // function will run after a new record is removed in the DB
  @AfterRemove()
  logRemove() {
    console.log(`Removed user with id ${this.id}`);
  }
}
