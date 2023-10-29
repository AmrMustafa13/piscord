import service1 from "@/assets/images/service1.svg";
import service2 from "@/assets/images/service2.svg";
import service3 from "@/assets/images/service3.svg";
import service4 from "@/assets/images/service4.svg";
import StyledSection from "./StyledSection";

const Services = () => {
  return (
    <>
      <StyledSection>
        <div className="max-w-[1260px] m-auto flex flex-wrap md:flex-nowrap justify-between items-center px-[40px] py-[120px]">
          <img src={service1} className="flex-0 md:flex-1 lg:flex-[7] min-w-0" />
          <div className="flex-0 md:flex-1 lg:flex-[4]">
            <h3 className="font-extrabold text-[clamp(20px,4vw,40px)] leading-[120%]">
              Create an invite-only place where you belong
            </h3>
            <p className="text-[clamp(16px,2vw,20px)] font-normal mt-6 font-gg-sans text-[#272b2e]">
              Discord servers are organized into topic-based channels where you can collaborate,
              share, and just talk about your day without clogging up a group chat.
            </p>
          </div>
        </div>
      </StyledSection>
      <StyledSection className="bg-[#f6f6f6]">
        <div className="max-w-[1260px] m-auto flex flex-wrap-reverse md:flex-nowrap justify-between items-center px-[40px] py-[120px]">
          <div className="flex-0 md:flex-1 lg:flex-[4]">
            <h3 className="font-extrabold text-[clamp(20px,4vw,40px)] leading-[120%]">
              Where hanging out is easy
            </h3>
            <p className="text-[clamp(16px,2vw,20px)] font-normal mt-6 font-gg-sans text-[#272b2e]">
              Grab a seat in a voice channel when you’re free. Friends in your server can see you’re
              around and instantly pop in to talk without having to call.
            </p>
          </div>
          <img src={service2} className="flex-0 md:flex-1 lg:flex-[7] min-w-0" />
        </div>
      </StyledSection>
      <StyledSection>
        <div className="max-w-[1260px] m-auto flex flex-wrap md:flex-nowrap justify-between items-center px-[40px] py-[120px]">
          <img src={service3} className="flex-0 md:flex-1 lg:flex-[7] min-w-0" />
          <div className="flex-0 md:flex-1 lg:flex-[4]">
            <h3 className="font-extrabold text-[clamp(20px,4vw,40px)] leading-[120%]">
              From few to a fandom
            </h3>
            <p className="text-[clamp(16px,2vw,20px)] font-normal mt-6 font-gg-sans text-[#272b2e]">
              Get any community running with moderation tools and custom member access. Give members
              special powers, set up private channels, and more.
            </p>
          </div>
        </div>
      </StyledSection>
      <StyledSection className="bg-[#f6f6f6]">
        <div className="max-w-[1260px] m-auto px-[40px] py-[120px] md:text-center">
          <h3 className="font-abc-ginto-nord font-extrabold text-[clamp(20px,4vw,40px)] ">
            Reliable tech for staying close
          </h3>
          <p className="text-[clamp(16px,2vw,20px)] font-normal mt-6 font-gg-sans text-[#272b2e]">
            Low-latency voice and video feels like you’re in the same room. Wave hello over video,
            watch friends stream their games, or gather up and have a drawing session with screen
            share.
          </p>
          <img src={service4} className="w-full" />
        </div>
      </StyledSection>
    </>
  );
};

export default Services;
