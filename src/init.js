import { initField } from './modules/functions/init/init-field';
import { initCells } from './modules/functions/init/init-cells';
import { initStones } from './modules/functions/init/init-stones';

import { findConjuctions } from './modules/functions/conjuction/find-conjuctions'; //
import { findConjuctionsVertical } from './modules/functions/conjuction/find-conjuctions-vertical'; //

initField();
initCells(); // Инициализация игровых ячеек
initStones(); // Заполнение / Перезаполнение поля и массива камнями

// findConjuctions();