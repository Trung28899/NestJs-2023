import { Expose, Transform } from 'class-transformer';
import { User } from 'src/users/user.entity';

export class ReportDto {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  year: number;
  @Expose()
  lng: number;
  @Expose()
  lat: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  @Expose()
  milage: number;

  // Brand new entity, not something from the Report Entity
  // This is how we get the user Id
  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
