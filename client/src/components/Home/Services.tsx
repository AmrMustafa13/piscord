import service1 from "@/assets/images/service1.svg";
import service2 from "@/assets/images/service2.svg";
import service3 from "@/assets/images/service3.svg";
import service4 from "@/assets/images/service4.svg";

const Services = () => {
  return (
    <>
      <section>
        <div className="max-w-[1260px] m-auto flex justify-between items-center px-[40px] py-[120px] gap-[10%]">
          <img src={service1} className="min-w-0" />
          <div className="w-[394px] flex-shrink-0">
            <h3 className="font-extrabold text-5xl leading-[57.6px]">
              Create an invite-only place where you belong
            </h3>
            <p className="text-[20px] font-normal mt-6 font-gg-sans text-[#272b2e]">
              Discord servers are organized into topic-based channels where you can collaborate,
              share, and just talk about your day without clogging up a group chat.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#f6f6f6]">
        <div className="max-w-[1260px] m-auto flex justify-between items-center px-[40px] py-[120px] gap-[10%]">
          <div className="w-[394px] flex-shrink-0">
            <h3 className="font-extrabold text-5xl leading-[57.6px]">Where hanging out is easy</h3>
            <p className="text-[20px] font-normal mt-6 font-gg-sans text-[#272b2e]">
              Grab a seat in a voice channel when you’re free. Friends in your server can see you’re
              around and instantly pop in to talk without having to call.
            </p>
          </div>
          <img src={service2} className="min-w-0" />
        </div>
      </section>
      <section>
        <div className="max-w-[1260px] m-auto flex justify-between items-center px-[40px] py-[120px] gap-[10%]">
          <img src={service3} className="min-w-0" />
          <div className="w-[394px] flex-shrink-0">
            <h3 className="font-extrabold text-5xl leading-[57.6px]">From few to a fandom</h3>
            <p className="text-[20px] font-normal mt-6 font-gg-sans text-[#272b2e]">
              Get any community running with moderation tools and custom member access. Give members
              special powers, set up private channels, and more.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1260px] m-auto px-[40px] py-[120px] text-center">
          <h3 className="font-abc-ginto-nord font-extrabold text-[40px] ">
            Reliable tech for staying close
          </h3>
          <p className="text-[20px] font-normal mt-6 font-gg-sans text-[#272b2e]">
            Low-latency voice and video feels like you’re in the same room. Wave hello over video,
            watch friends stream their games, or gather up and have a drawing session with screen
            share.
          </p>
          <img src={service4} className="w-full" />
        </div>
      </section>
    </>
  );
};

export default Services;
