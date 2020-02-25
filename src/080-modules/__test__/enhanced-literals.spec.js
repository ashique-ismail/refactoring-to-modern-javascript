import {
  createComputedProperty,
  createComputedMethod,
  propertyValueShorthandUsage,
  methodDefinitionShorthandUsage,
} from '../enhanced-literals';

describe('enhanced-literals', () => {
  it('createComputedProperty', () => {
    expect.assertions(1);

    const person = createComputedProperty();
    expect(person.fullName).toBe('Jane Smith');
  });

  it('createComputedMethod', () => {
    expect.assertions(2);

    const person = createComputedMethod();
    expect(person.fullName).toBeInstanceOf(Function);
    expect(person.fullName()).toBe('Jane Smith');
  });

  it('propertyValueShorthandUsage', () => {
    expect.assertions(4);

    const lib = propertyValueShorthandUsage();

    expect(lib.sum).toBeInstanceOf(Function);
    expect(lib.sum(2, 3)).toBe(5);

    expect(lib.multiply).toBeInstanceOf(Function);
    expect(lib.multiply(2, 3)).toBe(6);
  });

  it('methodDefinitionShorthandUsage', () => {
    expect.assertions(4);

    const lib = methodDefinitionShorthandUsage();

    expect(lib.sum).toBeInstanceOf(Function);
    expect(lib.sum(2, 3)).toBe(5);

    expect(lib.multiply).toBeInstanceOf(Function);
    expect(lib.multiply(2, 3)).toBe(6);
  });
});
