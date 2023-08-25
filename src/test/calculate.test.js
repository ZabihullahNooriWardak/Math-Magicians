import calculate from '../logicOfCalculator/calculate';
import operate from '../logicOfCalculator/operate';

jest.mock('../logicOfCalculator/operate');

describe('calculate function', () => {
  it('should handle AC button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should handle number buttons', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '2');
    expect(result).toEqual({ total: '10', next: '52', operation: '+' });
  });

  it('should handle decimal button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result).toEqual({ total: '10', next: '5.', operation: '+' });
  });

  it('should handle equals button', () => {
    operate.mockReturnValueOnce('15'); 
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');

    expect(result.total).toBe('15');
    expect(result.next).toBeNull();
    expect(result.operation).toBeNull();
    expect(operate).toHaveBeenCalledWith('10', '5', '+');
  });

  it('should handle +/- button for next', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '+/-');
    expect(result).toEqual({ total: null, next: '-5', operation: null });
  });
});
