import { Categories } from "src/categories/entities/categories.entity";
import { Posts } from "src/posts/entities/posts.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubCategories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @OneToOne(() => Categories, (category) => category.subCategory)
  category: Categories;

  @OneToMany(() => Posts, (post) => post.category)
  post: Posts;
}
