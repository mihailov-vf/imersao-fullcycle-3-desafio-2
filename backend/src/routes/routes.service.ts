import { Injectable } from '@nestjs/common';

@Injectable()
export class RoutesService {
  getRoutes() {
    return [
      {
        title: 'route 1',
        startPosition: {
          lat: 10.8974798,
          lon: 20.8579757,
        },
        endPosition: {
          lat: 10.8974898,
          lon: 20.8578857,
        },
      },
      {
        title: 'route 2',
        startPosition: {
          lat: 10.8974898,
          lon: 20.8578857,
        },
        endPosition: {
          lat: 10.8874598,
          lon: 20.8674900,
        },
      },
      {
        title: 'route 3',
        startPosition: {
          lat: 10.8874598,
          lon: 20.8674900,
        },
        endPosition: {
          lat: 10.8709457,
          lon: 20.8600507,
        },
      },
      {
        title: 'route 4',
        startPosition: {
          lat: 10.8709457,
          lon: 20.8600507,
        },
        endPosition: {
          lat: 10.8775508,
          lon: 20.8600507,
        },
      },
      {
        title: 'route 5',
        startPosition: {
          lat: 10.8775508,
          lon: 20.8600507,
        },
        endPosition: {
          lat: 10.8735808,
          lon: 20.8600507,
        },
      },
    ];
  }
}
