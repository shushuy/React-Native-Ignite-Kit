import * as React from 'react';
import renderer, { act } from 'react-test-renderer';

import { MonoText } from '../StyledText';

it(`renders correctly`, () => {
  let tree = null;
  let instance = null;

  act(() => {
    instance = renderer.create(<MonoText>Snapshot test!</MonoText>);
    tree = instance.toJSON();
  });

  expect(tree).toMatchSnapshot();
  act(() => {
    instance.unmount();
  });
});
