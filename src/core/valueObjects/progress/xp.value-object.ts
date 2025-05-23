/**
 * Represents experience points (XP) in the system.
 * XP is a value object because it's defined by its value, not an identity.
 */
export class XP {
  private readonly _value: number;

  /**
   * Creates a new XP instance.
   * @param value The XP amount (must be non-negative)
   */
  constructor(value: number) {
    if (value < 0) {
      throw new Error('XP cannot be negative');
    }

    this._value = value;
  }

  /**
   * Gets the XP value.
   */
  get value(): number {
    return this._value;
  }

  /**
   * Adds XP and returns a new XP instance.
   * @param xp The XP to add
   */
  add(xp: number | XP): XP {
    const valueToAdd = typeof xp === 'number' ? xp : xp.value;
    return new XP(this._value + valueToAdd);
  }

  /**
   * Subtracts XP and returns a new XP instance.
   * If the result would be negative, returns an XP with value 0.
   * @param xp The XP to subtract
   */
  subtract(xp: number | XP): XP {
    const valueToSubtract = typeof xp === 'number' ? xp : xp.value;
    return new XP(Math.max(0, this._value - valueToSubtract));
  }

  /**
   * Calculates the level based on XP.
   * This implements a basic leveling formula.
   */
  toLevel(): number {
    // Simple formula: every 100 XP = 1 level
    return Math.floor(this._value / 100) + 1;
  }

  /**
   * Returns XP needed for the next level.
   */
  toNextLevel(): number {
    const currentLevel = this.toLevel();
    const xpForNextLevel = currentLevel * 100;
    return xpForNextLevel - this._value;
  }

  /**
   * Compares this XP with another XP or number.
   * @param other The XP or number to compare with
   */
  equals(other: XP | number): boolean {
    const otherValue = typeof other === 'number' ? other : other.value;
    return this._value === otherValue;
  }

  /**
   * Returns a string representation of the XP.
   */
  toString(): string {
    return `${this._value} XP`;
  }
}
