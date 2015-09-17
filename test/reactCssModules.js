import {
    expect
} from 'chai';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import reactCssModules from './../src/index';

describe('reactCssModules', () => {
    context('a ReactComponent renders an element with the styleName prop', () => {
        it('that element should contain the equivalent className', () => {
            let Foo,
                component,
                shallowRenderer;

            shallowRenderer = TestUtils.createRenderer();

            Foo = class extends React.Component {
                render () {
                    return <div styleName='foo'>Hello</div>;
                }
            };

            Foo = reactCssModules(Foo, {
                foo: 'foo-1'
            });

            shallowRenderer.render(<Foo />);

            component = shallowRenderer.getRenderOutput();

            expect(component.props.className).to.equal('foo-1');
        });
    });

    context('a ReactComponent renders nothing', () => {
        it('linkClass must not intervene', () => {
            let Foo,
                component,
                shallowRenderer;

            shallowRenderer = TestUtils.createRenderer();

            Foo = class extends React.Component {
                render () {
                    return null;
                }
            };

            Foo = reactCssModules(Foo, {
                foo: 'foo-1'
            });

            shallowRenderer.render(<Foo />);

            component = shallowRenderer.getRenderOutput();

            expect(typeof component).to.equal('object');
        });
    });
});