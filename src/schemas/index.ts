import { z } from "zod";

const name = z.string({
  required_error: "Name is required",
  invalid_type_error: "Name must be a string",
});
