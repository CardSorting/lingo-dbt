/**
 * Module domain entity.
 * Represents a learning module in the DBT curriculum.
 */
export class ModuleEntity {
    /**
     * Create a new Module entity.
     */
    constructor(data) {
        // Related entities
        this._skills = [];
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
    get skills() {
        return this._skills;
    }
    /**
     * Set the skills for this module.
     */
    setSkills(skills) {
        // Sort skills by orderIndex
        this._skills = [...skills].sort((a, b) => a.orderIndex - b.orderIndex);
    }
    /**
     * Add a skill to this module.
     */
    addSkill(skill) {
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
    removeSkill(skillId) {
        const index = this._skills.findIndex(s => s.id === skillId);
        if (index >= 0) {
            this._skills.splice(index, 1);
        }
    }
    /**
     * Get the next skill in sequence after the specified skill.
     */
    getNextSkill(currentSkillId) {
        const currentIndex = this._skills.findIndex(s => s.id === currentSkillId);
        if (currentIndex === -1 || currentIndex === this._skills.length - 1) {
            return null;
        }
        return this._skills[currentIndex + 1];
    }
    /**
     * Get the previous skill in sequence before the specified skill.
     */
    getPreviousSkill(currentSkillId) {
        const currentIndex = this._skills.findIndex(s => s.id === currentSkillId);
        if (currentIndex <= 0) {
            return null;
        }
        return this._skills[currentIndex - 1];
    }
    /**
     * Get the total number of skills in this module.
     */
    get skillCount() {
        return this._skills.length;
    }
    /**
     * Get the total number of advanced skills in this module.
     */
    get advancedSkillCount() {
        return this._skills.filter(s => s.isAdvanced).length;
    }
    /**
     * Get only advanced skills in this module.
     */
    get advancedSkills() {
        return this._skills.filter(s => s.isAdvanced);
    }
    /**
     * Get only basic (non-advanced) skills in this module.
     */
    get basicSkills() {
        return this._skills.filter(s => !s.isAdvanced);
    }
    /**
     * Deactivate this module.
     */
    deactivate() {
        this.isActive = false;
        this.updatedAt = new Date();
    }
    /**
     * Activate this module.
     */
    activate() {
        this.isActive = true;
        this.updatedAt = new Date();
    }
    /**
     * Update module details.
     */
    update(data) {
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
    toJSON() {
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
