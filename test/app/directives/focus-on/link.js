import Link from 'app/directive/focus-on/link';

describe('the focusOn directive link', function () {

    it('should work', function (done) {

        var calls = 0;

        var scope = {
            $watch: function (expression, watch) {

                expression.should.equal('true');
                watch(true);
                watch(false);
                watch(true);
                watch(false);

                setTimeout(() => {

                    calls.should.equal(2);
                    done();
                });
            }
        };

        var element = [{
            focus: () => calls++
        }];

        var attrs = {
            focusOn: 'true'
        };

        new Link(scope, element, attrs);
    });
});
