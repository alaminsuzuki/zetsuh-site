import Image from "next/image";
import PageShell from "@/components/PageShell";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
  return (
    <PageShell currentPage="about">
      <AnimatedSection className="section">
        <div className="about-image-row">
          <Image
            src="/assets/about/image-about-1.jpg"
            alt="Portrait of Zetsuh"
            width={360}
            height={420}
            className="about-image"
            sizes="(max-width: 600px) 70vw, 210px"
          />
          <Image
            src="/assets/about/image-about-2.jpg"
            alt="Torii gate in the fog"
            width={360}
            height={420}
            className="about-image"
            sizes="(max-width: 600px) 70vw, 210px"
          />
        </div>

        <p className="bio-text">
          Pronounced « Zet-Sou » alternative R&amp;B/hip-hop artist zetsuh is a
          young up and coming rapper born in 1998 in Kano, Nigeria. Being half
          Japanese and half Nigerian (hausa), he is the definition of the modern
          day dual-creative. He is an independent musical artist and creative
          genius that specializes in versatility and adaptability. His sharp tone
          and assertive melodies are what make his charm. After having lived in
          his hometown of Kano for more than 15 years, zetsuh and his family was
          forced to move because of extremist group Boko Haram. He now resides in
          the south of France, a place where he draws most of his inspiration
          from. His musical inspirations include artists such as Kanye West,
          Kendrick Lamar, Outkast, A$AP Rocky, Tyler the Creator and Juice WRLD.
        </p>
      </AnimatedSection>
    </PageShell>
  );
}

