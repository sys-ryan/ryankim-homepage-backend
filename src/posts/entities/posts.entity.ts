import { Categories } from "src/categories/entities/categories.entity";
import { SubCategories } from "src/sub-categories/entities/sub-categories.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  title: string;

  @Column({ type: "text" })
  markdown: string;

  @Column({ type: "varchar", length: 255 })
  thumbnail: string;

  @Column({ type: "varchar", length: 255 })
  excerpt: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @ManyToOne(() => Categories, (category) => category.post)
  @JoinColumn()
  category: Categories;

  @ManyToOne(() => SubCategories, (subCategory) => subCategory.post)
  @JoinColumn()
  subCategory: SubCategories;
}
