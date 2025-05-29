const { z } = require('zod');

const personSchema = z.object({
    name: z.string().min(1, "Name is required"),
    age: z.number().min(0, "Age must be a positive number"),
    gender: z.string().min(1, "Gender is required"),
    mobileNumber: z.string().regex(/^[0-9]{10}$/, "Mobile number must be 10 digits")
});

const validatePerson = (req, res, next) => {
    try {
        const validatedData = personSchema.parse(req.body);
        req.body = validatedData;
        next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                message: "Validation failed",
                errors: error.errors
            });
        }
        next(error);
    }
};

module.exports = validatePerson; 