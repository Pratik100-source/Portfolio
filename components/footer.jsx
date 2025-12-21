import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const emailSchema = z.string({
  // .regex()
})
const schema = z.object({
  name: z.string(),
  email: z.string().email("Invalid email address"),

})

export default function Footer() {
  return (
    <div className="flex w-screen h-screen md:justify-center md:items-center">
      <div className="flex flex-col bg-yellow-400 w-70% h-screen pl-10 pr-10 pt-10">
        <div className=" flex flex-col gap-2 justify-center items-center">
          <h1 className="text-3xl tracking-wider font-semibold" style={{fontFamily:"Arial"}}>
            Contact&nbsp;
            <span className="hollywoodStarfire bg-clip-text text-transparent bg-sky-700 font-semibold whitespace-nowrap">
              Me
            </span>
          </h1>
          <h2 className="antialiased tracking-wider">
            Have a question or want to work together? I'd love to hear from you
          </h2>
        </div>

        <div></div>
      </div>
    </div>
  );
}
