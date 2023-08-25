import operate from '../logicOfCalculator/operate';

describe('operate function', () => {
  it('should add two numbers', () => {
    const result = operate('10', '5', '+');
    expect(result).toBe('15');
  });

  it('should subtract two numbers', () => {
    const result = operate('10', '5', '-');
    expect(result).toBe('5');
  });

  it('should multiply two numbers', () => {
    const result = operate('10', '5', 'x');
    expect(result).toBe('50');
  });

  it('should divide two numbers', () => {
    const result = operate('10', '5', '÷');
    expect(result).toBe('2');
  });

  it('should handle division by zero', () => {
    const result = operate('10', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should calculate modulo', () => {
    const result = operate('10', '7', '%');
    expect(result).toBe('3');
  });

  it('should handle modulo with divisor zero', () => {
    const result = operate('10', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw error for unknown operation', () => {
    expect(() => operate('10', '5', '^')).toThrow("Unknown operation '^'");
  });

  it('should correctly handle negative numbers addition', () => {
    const result = operate('-10', '5', '+');
    expect(result).toBe('-5');
  });

  it('should correctly handle negative numbers subtraction', () => {
    const result = operate('5', '-10', '-');
    expect(result).toBe('15');
  });

  it('should correctly handle negative numbers multiplication', () => {
    const result = operate('-10', '5', 'x');
    expect(result).toBe('-50');
  });

  it('should correctly handle negative numbers division', () => {
    const result = operate('10', '-5', '÷');
    expect(result).toBe('-2');
  });
});
