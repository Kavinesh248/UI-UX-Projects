import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";

const Testimonials = function () {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What people say about me"
          sub="⭐Client feedback highlight"
        />

        <div className="lg:columns-3 md:columns-2 columns-1">
          {testimonials.map((testimonial) => (
            <GlowCard card={testimonial}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt={testimonial.name} />
                </div>
                <div className="">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
