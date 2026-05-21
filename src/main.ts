import "./style.css";

const links = [
  { label: "GitHub", href: "https://github.com/riccardopll", icon: "/icons/github.svg" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/riccardo-palleschi",
    icon: "/icons/linkedin.svg",
  },
  { label: "X", href: "https://x.com/riccardopll", icon: "/icons/x.svg" },
  { label: "Email", href: "mailto:riccardo.palleschi@gmail.com", icon: "/icons/email.svg" },
];

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
    <main class="min-h-svh bg-(--color-bg) px-8 py-10 text-(--color-text)">
      <article class="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-2xl flex-col justify-center">
        <header class="mb-12 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div>
            <h1 class="text-2xl font-medium tracking-normal text-white sm:text-3xl">
              Riccardo Palleschi
            </h1>
            <p class="mt-1 text-sm text-(--color-muted)">
              @riccardopll
            </p>
          </div>
          <nav class="flex flex-wrap gap-x-2 gap-y-2 text-(--color-muted)" aria-label="Links">
            ${links
              .map(
                (link) => `
                  <a class="link" href="${link.href}" aria-label="${link.label}"${link.href.startsWith("mailto:") ? "" : ' target="_blank" rel="noreferrer"'}>
                    <span class="link-icon" style="--icon: url('${link.icon}')" aria-hidden="true"></span>
                  </a>
                `,
              )
              .join("")}
          </nav>
        </header>

        <section class="space-y-5 text-base leading-7 text-(--color-text)">
          <p>
            I got into programming early through Minecraft plugins, GTA V modding, a jailbroken iPod, rooted Androids and whatever made me curious at the time. I was always more interested in changing how things worked than using them the way they came.
          </p>
          <p>
            Today I work at <a class="text-link" href="https://leitha.eu/" target="_blank" rel="noreferrer">Leithà</a> on the backend of an insurtech app used by more than 70k clients. I work on normal product features, bugs, infrastructure, stability, performance and cost reduction.
          </p>
          <p>
            I like backend because the problems are concrete. Something is slow. Something costs too much. Something breaks under load. Some old code needs to be deleted before it deletes everyone's will to live.
          </p>
          <p>
            One thing I'm proud of is helping cut our DynamoDB bill by six figures in a year. It was not a huge rewrite. It was mostly understanding indexes, table size, access patterns and where the overhead was.
          </p>
          <p>
            I'm studying Management and Artificial Intelligence at LUISS. I chose it because I was already working as a software engineer and wanted something broader than a standard CS degree. After that, I plan to do a master's in Computer Science and AI at Sapienza.
          </p>
          <p>
            Outside of work, I train, try to live a healthy life and listen to a lot of techno.
          </p>
        </section>
      </article>
    </main>
  `;
}
