import $ from 'jquery';
import { readName } from './readName';
import { writeName } from './writeName';

const update = (): void => {
  writeName(readName());
};

$('.button').on('click', () => {
  update();
});
