import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Questions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: "255" })
  name: string;

  @Column({ type: "varchar", length: "255" })
  email: string;

  @Column({ type: "text" })
  message: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
