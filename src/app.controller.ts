import { Body, Controller, Post } from '@nestjs/common'
import { Observable } from 'rxjs'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('add')
  getSum(@Body() data): Observable<number> {
    console.log(data)
    return this.appService.accumulate(data.data)
  }
}
