import { Pipe, PipeTransform } from '@angular/core';
import {PipeTestPipe} from './pipe-test.pipe'

@Pipe({
  name: 'pipeImpureTest',
  pure: false
})
export class PipeImpureTestPipe extends PipeTestPipe{}
