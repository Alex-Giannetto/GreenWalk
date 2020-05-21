import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Pipe({
	name: 'nl2br',
})
export class Nl2brPipe implements PipeTransform {

	constructor (private sanitizer: DomSanitizer) {}

	transform (value: string): SafeHtml {
		let result

		result = value.replace(/(?:\r\n|\r|\n)/g, '<br />')

		return this.sanitizer.bypassSecurityTrustHtml(result)
	}

}
