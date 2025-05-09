export class Module {
  id!: string;
  name!: string;
  description!: string;
  orderIndex!: number;
  imageUrl?: string;
  isActive!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  
  // Relationships (not stored in this entity, just for type completeness)
  skills?: any[];

  constructor(props: Partial<Module>) {
    Object.assign(this, props);
  }
}
