import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type BookingInfo = {
  location: string | undefined;
  duration: string | undefined;
  date: Date | undefined;
  time: string | undefined;
}

export type UserData = {
  name: string;
  email: string;
}

export type ValidFieldNames = "email" | "name"

export type FormFieldsProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<UserData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
}

export const UserSchema: ZodType<UserData> = z.object({
  name: z.string().min(1),
  email: z.string().email(),
})