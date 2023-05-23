import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  milage: number;

  // Association is not automatically fetched when we fetch a Report
  // The reasoning of these arguments, see video 133. For now, just
  // know it is the way it is
  @ManyToOne(() => User, (user) => user.reports)
  user: User;
}
