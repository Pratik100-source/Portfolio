import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Box, ExternalLink, Github, Sparkles } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";

export default function ProjectDetail({ project }) {
  if (!project) return null;

  return (
    <>
      <Head>
        <title>{project.title} | Pratik Panthi</title>
        <meta name="description" content={project.description} />
      </Head>
      <main className="min-h-screen bg-secondary-background px-5 py-12 text-foreground sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-center gap-3 text-sm text-muted-foreground">
            <Link href="/#projects" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-foreground transition hover:bg-accent">
              <ArrowLeft className="h-4 w-4" /> Back
            </Link>
            <span>Projects</span><span>›</span><span className="text-foreground">{project.title}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
            <section>
              <h1 className="rockwellNova text-5xl font-medium tracking-wide sm:text-6xl">{project.title}</h1>
              <div className="my-7 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500" />
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">{project.description}</p>

              <div className="mt-8 grid max-w-lg grid-cols-2 gap-3 rounded-xl bg-card/60 p-3">
                <div className="rounded-lg border border-border bg-background/30 p-4"><Box className="mb-2 h-5 w-5 text-blue-400" /><strong className="block text-xl">{project.technologies.length}</strong><span className="text-sm text-muted-foreground">Technologies</span></div>
                <div className="rounded-lg border border-border bg-background/30 p-4"><Sparkles className="mb-2 h-5 w-5 text-violet-400" /><strong className="block text-xl">{project.features.length}</strong><span className="text-sm text-muted-foreground">Key features</span></div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-blue-500/50 bg-blue-500/10 px-5 py-3 text-sm font-medium text-blue-400 transition hover:bg-blue-500/20"><ExternalLink className="h-4 w-4" />Live Demo</a>}
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-violet-500/40 bg-violet-500/10 px-5 py-3 text-sm font-medium text-violet-400 transition hover:bg-violet-500/20"><Github className="h-4 w-4" />GitHub</a>
              </div>

              <div className="mt-10"><h2 className="mb-5 flex items-center gap-2 text-lg font-semibold"><Box className="h-4 w-4 text-blue-400" />Technologies Used</h2><div className="flex flex-wrap gap-3">{project.technologies.map((technology) => <span key={technology} className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">{technology}</span>)}</div></div>
            </section>

            <section className="space-y-8">
              <div className="overflow-hidden rounded-2xl border border-border bg-card/40 p-3"><Image src={project.image} alt={`${project.title} project preview`} width={900} height={600} priority className="h-auto w-full rounded-xl object-cover" /></div>
              <div className="rounded-2xl border border-border bg-card/40 p-7"><h2 className="mb-6 flex items-center gap-2 text-lg font-semibold"><Sparkles className="h-5 w-5 text-yellow-400" />Key Features</h2><ul className="space-y-5">{project.features.map((feature) => <li key={feature} className="flex gap-3 leading-6 text-muted-foreground"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-400" />{feature}</li>)}</ul></div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: projects.map(({ slug }) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { project: getProjectBySlug(params.slug) } };
}
