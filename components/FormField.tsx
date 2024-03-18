import { FormFieldsProps } from "@/types";

const FormField: React.FC<FormFieldsProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <input
      className="mt-5 w-full p-2 border border-gray-300 rounded-lg focus:outline-none  focus:ring-2 focus:ring-green-200"
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {error && <p className="text-red-600">{error.message}</p>}
  </>
);
export default FormField;
