// Setup file for Jest and Enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme config
configure({ adapter: new Adapter() });
