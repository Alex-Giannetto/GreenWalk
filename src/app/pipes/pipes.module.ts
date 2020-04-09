import { NgModule } from '@angular/core'
import { Nl2brPipe } from './nl2br/nl2br.pipe'
import { SafePipe } from './safe/safe.pipe'

@NgModule({
	declarations: [Nl2brPipe, SafePipe],
	exports: [Nl2brPipe, SafePipe]
})
export class PipesModule {}
