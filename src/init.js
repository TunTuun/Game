import { initField } from './modules/functions/init/init-field';
import { initCells } from './modules/functions/init/init-cells';
import { initStones } from './modules/functions/init/init-stones';

import { findConjuctions } from './modules/functions/conjuction/find-conjuctions'; //
import { conjuctionStack } from './modules/const/const'; //
import { destroyConjuctions } from './modules/functions/conjuction/destroy-conjuctions';
import { field } from './modules/const/const';

initField();
initCells(); // Инициализация игровых ячеек
initStones(); // Заполнение / Перезаполнение поля и массива камнями

findConjuctions();
destroyConjuctions();
