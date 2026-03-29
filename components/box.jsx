import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function CardComponent({ title, description, image, link }) {
  return (
    <Card className="w-[22rem] h-[27rem] transform transition-all duration-500 hover:scale-105 hover:-rotate-1 cursor-pointer">
      <CardHeader className="flex flex-col h-full">
        <Image
          src={image}
          alt={title}
          width={400}
          height={1000}
          className="w-full h-[35rem] rounded-md mb-3 flex-2"
        />
        <CardTitle className="">{title}</CardTitle>
        <CardDescription className="flex-1">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex-row gap-2">
        <section className="flex-1">
          <button className="cursor-pointer px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
            Live Demo
          </button>
        </section>
        <section className="flex-1 align-right">
          <button className="cursor-pointer px-4 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            View More
          </button>
        </section>
      </CardFooter>
    </Card>
  );
}
