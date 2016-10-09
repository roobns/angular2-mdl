"use strict";
var core_1 = require('@angular/core');
exports.flyInOutTrigger = core_1.trigger('flyInOut', [
    core_1.state('*', core_1.style({ transform: 'translateX(0)', opacity: 1 })),
    core_1.transition('void => *', [
        core_1.style({ transform: 'translateX(-100%)', opacity: 0 }),
        core_1.animate(300)
    ]),
    core_1.transition('* => void', core_1.animate(300, core_1.style({ transform: 'translateX(100%)', opacity: 0 })))
]);
exports.hostConfig = {
    '[@flyInOut]': 'true',
    '[style.display]': "'block'"
};
//# sourceMappingURL=../../../dist/app/animations/flyInOutTrigger-animation.js.map