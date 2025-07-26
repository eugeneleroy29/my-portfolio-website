import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        {/* Flex layout for image + text */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:text-left gap-8">
          {/* Text Section */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}Eugene
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}Sunie
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
              A Junior Web Developer. I code responsive websites. I love building
              intuitive user interfaces and learning new tools along the way. If
              you're hiring, I’d love to be part of your team!
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="default-button">
                View My Work
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-lg opacity-0 animate-fade-in-delay-2">
            <img
              src="/profile.png"
              alt="Eugene Sunie"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;