import { dealProcess } from "@/content/home";
import { SiteSectionHead } from "@/components/ui/Headline";

export function DealProcess() {
  const last = dealProcess.stages.length - 1;
  return (
    <section id="process" aria-labelledby="process-title" className="border-y border-line bg-paper py-14 nav:py-[4.5rem]">
      <div className="container-site">
        <SiteSectionHead
          id="process-title"
          eyebrow={dealProcess.eyebrow}
          title={dealProcess.title}
          intro={dealProcess.intro}
        />
        <ol className="mt-11 grid gap-1.5 rounded-md bg-navy px-4 py-2 text-on-navy nav:grid-cols-5 nav:gap-0 nav:px-2 nav:py-6">
          {dealProcess.stages.map((stage, index) => (
            <li
              key={stage.title}
              className="relative min-w-0 border-t border-navy-line py-3.5 first:border-t-0 nav:border-t-0 nav:px-4 nav:py-2"
            >
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className="headline absolute top-2 -left-1.5 hidden text-[2.5rem] text-orange nav:block"
                >
                  ›
                </span>
              ) : null}
              <span aria-hidden="true" className={`headline block text-[2.5rem] ${index === last ? "text-on-navy" : "text-orange"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={`headline mt-1 text-[1.625rem] !font-bold ${index === last ? "text-orange" : ""}`}>
                <span className="sr-only">Stage {index + 1}: </span>
                {stage.title}
              </h3>
              <p className="mt-1.5 text-[0.9375rem] text-on-navy-muted">{stage.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
