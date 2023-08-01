import { createContext} from 'react';
import { ICalculatorData } from './type';

const CalculatorContext = createContext<ICalculatorData | undefined>(undefined);

export default CalculatorContext