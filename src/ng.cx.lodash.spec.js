describe('ng.cx.lodash', function() {
    'use strict';

    beforeEach(module('ng.cx.lodash'));

    it('should provide a way to inject lodash', inject(function(_) {
        console.log('_', _);

        expect(typeof _).toBe('object');
    }));

});

