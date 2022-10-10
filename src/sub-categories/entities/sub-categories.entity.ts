import { Categories } from "src/categories/entities/categories.entity";
import { Posts } from "src/posts/entities/posts.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from "typeorm";

@Entity()
export class SubCategories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @ManyToOne(() => Categories, (category) => category.subCategories)
  category: Categories;

  @RelationId((subCategory: SubCategories) => subCategory.category)
  categoryId: number;

  @OneToMany(() => Posts, (post) => post.category)
  post: Posts;
}
