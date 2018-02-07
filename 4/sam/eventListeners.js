// Pulling in the STLIB for events
const EventEmitter = require('events');

// Extending the Event Emitter Class
class MyEmitter extends EventEmitter {}

// Creating a Car Class
class Car {
  constructor() {
    this.engine = false;
  }

  render() {
    console.log('Engine Started');
  }
}

// You could shorten this to just `new EventEmitter`
const carEvents = new MyEmitter();
const car = new Car();

carEvents.on('key turned', () => {
  car.toggleKey();
});

carEvents.emit('key turned');
