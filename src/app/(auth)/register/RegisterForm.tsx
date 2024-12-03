"use client";

import {
  registerSchema,
  RegisterSchema,
} from "@/lib/schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Input
} from "@nextui-org/react";
import {
  FormProvider,
  useForm,
} from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  }

  return (
    <Card className="w-3/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-default">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">
              Register
            </h1>
          </div>
          <p className="text-neutral-500">
            Welcome to NextMatch
          </p>
        </div>
      </CardHeader>
      <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Input
              defaultValue=""
              label="Name"
              variant="bordered"
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={
                errors.name?.message as string
              }
            />
            <Input
              defaultValue=""
              label="Email"
              variant="bordered"
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={
                errors.email?.message as string
              }
            />
            <Input
              defaultValue=""
              label="Password"
              variant="bordered"
              type="password"
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={
                errors.password?.message as string
              }
            />
            <Button
              fullWidth
              color="default"
              type="submit"
              isDisabled={!isValid}
            >
              Register
            </Button>
          </form>
      </CardBody>
    </Card>
  );
}