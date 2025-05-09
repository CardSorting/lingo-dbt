import { BaseEntity, Module as ModuleType, Skill } from '../types';

/**
 * Module domain entity.
 * Represents a learning module in the DBT curriculum.
 */
export class ModuleEntity implements BaseEntity {
  id: string;
  name: string;
  description: string;
  orderIndex: number;
  imageUrl?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  
  // Related entities
  private _skills: Skill[] = [];
  
  /**
   * Create a new Module entity.
   */
  constructor(data: ModuleType) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.orderIndex = data.orderIndex;
    this.imageUrl = data.imageUrl;
    this.isActive = data.isActive;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
  
  /**
   * Get the skills associated with this module.
   */
  get skills(): ReadonlyArray<Skill> {
    return this._skills;
  }
  
  /**
   * Set the skills for this module.
   */
  setSkills(skills: Skill[]): void {
    // Sort skills by orderIndex
    this._skills = [...skills].sort((a, b) => a.orderIndex - b.orderIndex);
  }
  
  /**
   * Add a skill to this module.
   */
  addSkill(skill: Skill): void {
    if (skill.moduleId !== this.id) {
      throw new Error(`Skill ${skill.id} does not belong to module ${this.id}`);
    }
    
    if (!this._skills.find(s => s.id === skill.id)) {
      this._skills.push(skill);
      // Re-sort skills by orderIndex
      this._skills.sort((a, b) => a.orderIndex - b.orderIndex);
    }
  }
  
  /**
   * Remove a skill from this module.
   */
  removeSkill(skillId: string): void {
    const index = this._skills.findIndex(s => s.id === skillId);
    if (index >= 0) {
      this._skills.splice(index, 1);
    }
  }
  
  /**
   * Get the next skill in sequence after the specified skill.
   */
  getNextSkill(currentSkillId: string): Skill | null {
    const currentIndex = this._skills.findIndex(s => s.id === currentSkillId);
    if (currentIndex === -1 || currentIndex === this._skills.length - 1) {
      return null;
    }
    
    return this._skills[currentIndex + 1];
  }
  
  /**
   * Get the previous skill in sequence before the specified skill.
   */
  getPreviousSkill(currentSkillId: string): Skill | null {
    const currentIndex = this._skills.findIndex(s => s.id === currentSkillId);
    if (currentIndex <= 0) {
      return null;
    }
    
    return this._skills[currentIndex - 1];
  }
  
  /**
   * Get the total number of skills in this module.
   */
  get skillCount(): number {
    return this._skills.length;
  }
  
  /**
   * Get the total number of advanced skills in this module.
   */
  get advancedSkillCount(): number {
    return this._skills.filter(s => s.isAdvanced).length;
  }
  
  /**
   * Get only advanced skills in this module.
   */
  get advancedSkills(): ReadonlyArray<Skill> {
    return this._skills.filter(s => s.isAdvanced);
  }
  
  /**
   * Get only basic (non-advanced) skills in this module.
   */
  get basicSkills(): ReadonlyArray<Skill> {
    return this._skills.filter(s => !s.isAdvanced);
  }
  
  /**
   * Deactivate this module.
   */
  deactivate(): void {
    this.isActive = false;
    this.updatedAt = new Date();
  }
  
  /**
   * Activate this module.
   */
  activate(): void {
    this.isActive = true;
    this.updatedAt = new Date();
  }
  
  /**
   * Update module details.
   */
  update(data: Partial<Pick<ModuleType, 'name' | 'description' | 'orderIndex' | 'imageUrl'>>): void {
    if (data.name !== undefined) {
      this.name = data.name;
    }
    
    if (data.description !== undefined) {
      this.description = data.description;
    }
    
    if (data.orderIndex !== undefined) {
      this.orderIndex = data.orderIndex;
    }
    
    if (data.imageUrl !== undefined) {
      this.imageUrl = data.imageUrl;
    }
    
    this.updatedAt = new Date();
  }
  
  /**
   * Convert to plain object for transfer/storage.
   */
  toJSON(): ModuleType {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      orderIndex: this.orderIndex,
      imageUrl: this.imageUrl,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}
