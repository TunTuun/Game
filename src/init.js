import { initField } from './modules/functions/init/init-field';
import { initCells } from './modules/functions/init/init-cells';
import { initStones } from './modules/functions/init/init-stones';
import { checkConjuctions } from './modules/functions/conjuction/check-conjuctions';
import { forbideActions } from './modules/functions/forbide-actions';

initField();
initCells();
initStones();
checkConjuctions();
