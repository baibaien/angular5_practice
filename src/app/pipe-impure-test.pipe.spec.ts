import { PipeImpureTestPipe } from './pipe-impure-test.pipe';

describe('PipeImpureTestPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeImpureTestPipe();
    expect(pipe).toBeTruthy();
  });
});
