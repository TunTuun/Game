import { initField } from './modules/functions/init/init-field';
import { initCells } from './modules/functions/init/init-cells';
import { initStones } from './modules/functions/init/init-stones';
import { checkConjuctions } from './modules/functions/conjuction/check-conjuctions';
import { lockField } from './modules/functions/lock-field';
import { unlockField } from './modules/functions/unlock-field';

initField();
initCells();
lockField();
initStones();
unlockField();
checkConjuctions();
