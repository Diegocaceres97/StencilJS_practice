import { Component, Event, Host, Prop, State, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'counter-component',
  styleUrl: 'counter-component.css',
  shadow: true,
})
export class CounterComponent {

  @Prop() btntext:string;
  @Prop() color:string;

  @State() counter = 0;

  @Event() didReset: EventEmitter;

  increase() {
    this.counter++;
  }

  reset(){
    this.counter = 0;
    this.didReset.emit(true);
  }

  render() {
    return (
      <Host>
        <button onClick={()=>this.increase()}>{this.btntext}</button>
      <div class={`counter ${this.color}`}>{this.counter}</div>
      <button onClick={()=>this.reset()}>Reset</button>
      <slot name="help"></slot>
      </Host>
    );
  }

}
