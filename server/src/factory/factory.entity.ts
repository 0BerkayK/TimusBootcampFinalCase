import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('factory_list')
export class FactoryList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  factoryName: string;
  membershipDate: Date;
  membershipExpiringDate: Date;
  numberOfEmplyoee: number;
  freeMember: boolean;
}

@Entity('factory_details')
export class FactoryDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fabrikaId: string;
  dateRange: Date;
  kw: number;
  usageFee: number;
  discountedPrice: boolean;
}

@Entity('fabctory_log')
export class FactoryLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  action: string;

}