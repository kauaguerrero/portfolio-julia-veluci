import { FaGem } from "react-icons/fa";
import Reveal from "./Reveal";
import Section from "./Section";
import { differentials } from "../data/content";

export default function Differentials() {
  return (
    <Section
      id="diferenciais"
      className="bg-blush-light"
      eyebrow="Diferenciais"
      title="Por que trabalhar comigo?"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentials.map((item, i) => (
          <Reveal key={item} delay={i * 0.05}>
            <div className="bg-white rounded-2xl p-6 h-full shadow-sm border border-mist/60 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-blush flex items-center justify-center text-ink mb-4">
                <FaGem size={16} />
              </div>
              <p className="text-charcoal/85 text-sm leading-relaxed">
                {item}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
