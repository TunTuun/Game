import { ConjuctionStack } from '../classes/conjuction-stack';
import { Field } from '../classes/field-storage';

export const fieldWidth = 7;
export const fieldHeight = 7;
export const playField = document.querySelector('.play-field');
export const scoreCounter = document.querySelector('score');
export const typeAmmount = 7;
export const stoneColors = [
  'crimson',
  'limegreen',
  'orange',
  'turquoise',
  'blue',
  'violet',
  'sienna',
];
export const gameplayHandler = {
  isSelectedFlag: false,
  selectedStone: null,
  score: 0,
};
export const field = new Field(fieldWidth, fieldHeight);
export const conjuctionStack = new ConjuctionStack(fieldWidth, fieldHeight);
