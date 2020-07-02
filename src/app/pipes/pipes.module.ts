import { NgModule } from '@angular/core'
import { Nl2brPipe } from './nl2br/nl2br.pipe'
import { SafePipe } from './safe/safe.pipe';
import { DateDifferencePipe } from './dateDifference/date-difference.pipe'

@NgModule({
	declarations: [Nl2brPipe, SafePipe, DateDifferencePipe],
  exports: [Nl2brPipe, SafePipe, DateDifferencePipe],
})
export class PipesModule {}
