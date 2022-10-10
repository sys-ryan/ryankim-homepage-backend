import { Posts } from "src/posts/entities/posts.entity";
import { SubCategories } from "src/sub-categories/entities/sub-categories.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @OneToMany(() => SubCategories, (subcategory) => subcategory.category)
  subCategories: SubCategories[];

  @OneToMany(() => Posts, (post) => post.subCategory)
  post: Posts;
}
