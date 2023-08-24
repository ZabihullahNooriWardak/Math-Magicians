import calculate from '../logicOfCalculator/calculate';
import operate from '../logicOfCalculator/operate';

jest.mock('../logicOfCalculator/operate'); // Mocking the operate module

describe('calculate function', () => {
  it('should handle AC button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });