import { TinyTypeOf } from 'tiny-types';

export default class TitleId extends TinyTypeOf<number>() {
  public constructor(value: string) {
    super(Number(`0x${value}`))
  }

  public toString(): string {
    return this.value.toString(16);
  }
}
