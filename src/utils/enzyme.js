// configuring enzyme to use the adapter for React 16
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export default Enzyme.configure({ adapter: new Adapter() });
