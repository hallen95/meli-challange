import "@testing-library/jest-dom";

// jest-axe
import { toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);
