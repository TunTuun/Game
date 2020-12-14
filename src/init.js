import { initField } from './modules/functions/init/init-field';
import { initCells } from './modules/functions/init/init-cells';
import { initStones } from './modules/functions/init/init-stones';

// Testing
import { findConjuctions } from './modules/functions/conjuction/find-conjuctions'; //
import { destroyConjuctions } from './modules/functions/conjuction/destroy-conjuctions'; //
import { field } from './modules/const/const'; //
import { dropStones } from './modules/functions/stone-functions/drop-stones'; //

initField();
initCells();
initStones();

// Testing
// findConjuctions();
// destroyConjuctions();

// setTimeout(() => {
//   dropStones();
//   console.log(field.storage);
// }, 2000);
