// 1. Import Sub-Registries
import { MATH_REGISTRY } from './mathRegistry';
import { ML_REGISTRY } from './mlRegistry';

// 2. Import Defaults/Placeholders
import {
  DefaultVisual,
  DefaultControls,
  DefaultExplanation,
} from '../components/Defaults/Placeholders';

// 3. Combine them
// The Spread Operator (...) takes all keys from Math and all keys from ML and puts them in one object.
const ACTIVE_TOPICS = {
  ...MATH_REGISTRY,
  ...ML_REGISTRY,
};

// 4. Create a "Fallback" mechanism
const createRegistryWithFallbacks = (registry) => {
  return new Proxy(registry, {
    get: (target, prop) => {
      if (prop in target) {
        return target[prop];
      }
      // If not, return the Default Placeholder
      return {
        visual: DefaultVisual,
        controls: DefaultControls,
        explanation: DefaultExplanation,
        initialParams: {},
      };
    },
  });
};

export const TOPIC_REGISTRY = createRegistryWithFallbacks(ACTIVE_TOPICS);
