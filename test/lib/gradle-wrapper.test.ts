import { getGradleCommandArgs } from '../../lib/gradle-wrapper';

import * as path from 'path';

test('get right args for gradle command', async () => {
  expect(getGradleCommandArgs('directory_name')).toEqual([
    'printClasspath',
    '-I',
    path.join(__dirname, '../../bin/init.gradle'),
    '-q',
    '-p',
    'directory_name',
  ]);
});
