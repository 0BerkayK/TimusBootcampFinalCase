import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('factory_log')
export class FactoryLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  action: string;

}