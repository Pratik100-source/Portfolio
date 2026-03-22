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
    <Card className="w-[22rem] hover:scale-[1.02] transition-transform duration-300 ease-in-out h-[27rem]">
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
          <Button type="submit" className="w-100%">
            Live demo
          </Button>
        </section>
        <section className="flex-1 align-right">
          <Button
            variant="outline"
            className="w-50% float-right cursor-pointer"
            onClick={() => window.open(link, "_blank")}
          >
            View More
          </Button>
        </section>
      </CardFooter>
    </Card>
  );
}
