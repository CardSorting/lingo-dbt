export interface Entity {
  id: string;
}

export class Skill implements Entity {
  id!: string;
  moduleId!: string;
  name!: string;
  description!: string;
  orderIndex!: number;
  imageUrl?: string;
  isAdvanced!: boolean;
  isActive!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  
  // Relationships (not stored in this entity, just for type completeness)
  lessons?: any[];

  constructor(props: Partial<Skill>) {
    Object.assign(this, props);
  }
}
