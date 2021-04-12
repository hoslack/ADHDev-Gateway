import { Injectable, Logger } from '@nestjs/common'
import {
  ClientProxy,
  ClientProxyFactory,
  Transport
} from '@nestjs/microservices'
import { Observable } from 'rxjs'

@Injectable()
export class AppService {
  private client: ClientProxy
  private logger = new Logger('service')
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877
      }
    })
  }

  public accumulate(data: number[]): Observable<number> {
    return this.client.send<number, number[]>('add', data)
  }
}
