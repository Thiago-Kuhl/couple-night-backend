import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class Users {
  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column()
  name: string;
  
  @Column()
  nickname: string;
  
  @Column()
  birth_date: string;
  
  @Column()
  phone_number: string;
  
  @Column()  
  email: string;
  
  @Column()
  password: string;
}