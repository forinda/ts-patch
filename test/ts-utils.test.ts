import { getGlobalTSDir, getTSPackage } from '../src/ts-utils';
import { expect } from 'chai';


/* ********************************************************************************************************************
 * Tests
 * ********************************************************************************************************************/

describe(`ts-utils`, () => {
  describe(`getGlobalTSDir`, () => {
    const tsDir = getGlobalTSDir();

    it(`Returns a result`, () => expect(tsDir).to.not.be.undefined);
    it(`Is valid TS dir`, () => expect(getTSPackage(tsDir)).to.not.throw);
    it(`Path includes npm global prefix`, () => expect(tsDir).to.include(require('global-prefix')));
  });
});