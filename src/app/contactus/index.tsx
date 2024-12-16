"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

type FormData = {
  username: string;
  surname: string;
  email: string;
  number: string;
};

function ContactUs() {
  const form = useForm<FormData>({
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="bg-custom-primary2">
      <div className="container flex w-full h-screen text-white items-center">
        <div className="w-1/2 space-y-6">
          <h1 className="text-6xl font-extrabold">Contact Us</h1>
          <p className="text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Laborum,
            dicta.
          </p>
          <p className="text-lg">email@mail.ru</p>
          <p className="text-lg">+7 777 777 7777</p>
          <p className="underline text-lg">Customer Support</p>
        </div>
        <div className="w-1/2 flex justify-end w-full">
          <div className="h-fit w-4/5 bg-custom-primary p-8 space-y-4">
            <h1 className="text-4xl font-extrabold">Get in touch</h1>
            <p>You can reach us anytime</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex gap-3  w-full">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input
                            placeholder="Enter your username"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="surname"
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input
                            placeholder="Enter your surname"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem className="flex-grow">
                        <FormControl>
                          <Input
                            placeholder="Enter your number"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Textarea placeholder="how can we help you?" />
                </div>
                <Button type="submit" variant={"pink"} className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
