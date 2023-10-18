import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, Unique } from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
     id: any;
  
    @Column()
    name: string;

    @Column({ unique: true })
    @Unique('Duplicate email', ['email'])
    email: string;


    @Column({ unique: true })
    @Unique('Duplicate number', ['number'])
    number: string;


    @Column()
    password: string;

    @CreateDateColumn()
    readonly createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
}
