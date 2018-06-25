import Ayobase  from '../../core';
const {
  SessionCache,
} = Ayobase;

class TestData extends SessionCache {
  constructor() {
    const options = {
      lifeTime: '1D',
      key: 'lhbt0_chart',
    };
    super(options);
  }
}

const BenefitData = TestData.getInstance();
 

export default BenefitData;