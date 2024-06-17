import Quote from "../images/bg-pattern-quotation.svg";
import Daniel from "../images/image-daniel.jpg";
import Jonathan from "../images/image-jonathan.jpg";
import Kira from "../images/image-kira.jpg";
import Jeanette from "../images/image-jeanette.jpg";
import Patrick from "../images/image-patrick.jpg";
export default function Box() {
  return (
    <div className="max-w-6xl mx-auto border-2 px-1 grid gap-5 md:grid-cols-4 md:grid-rows-2">
      {/* box 1 */}
      <div className="text-white relative flex-flex-col bg-purple-700 p-6 rounded-lg space-y-3 md:col-span-2">
        <img
          src={Quote}
          alt=""
          className="absolute top-10 right-12 scale-150"
        />
        <div className="flex space-x-3">
          <img
            src={Daniel}
            alt=""
            className="h-12 w-12 rounded-full ring-2 ring-red-300"
          />
          <div>
            <h2 className="font-bold opacity-90">Daniel Clifford</h2>
            <p className="opacity-50">Verified graduate</p>
          </div>
        </div>
        <h2 className="relative font-bold z-100 max-w-md text-lg">
          I received a job offer mid-course, and the subjects i learned were
          current , if not more so, in the company i joinded. I honestly feel i
          got every penny's worth
        </h2>
        <p className="opacity-50 relative z-10 line-clamp-3">
          " I was an an EMT for many years before I joined the bootcamp. I've
          been looking to make a transition and have heared some people who had
          an amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most gruelling - time of my life. Since
          completing the course. I've successfully switched careers, working as
          a software engineer at a VR startup.
        </p>
      </div>
      {/* box 2 */}
      <div className="text-white flex-flex-col bg-gray-600 p-6 rounded-lg space-y-3">
        <div className="flex space-x-3">
          <img
            src={Jonathan}
            alt=""
            className="h-12 w-12 rounded-full ring-2 ring-red-300"
          />
          <div>
            <h2 className="font-bold opacity-90">Jonathan Walters</h2>
            <p className="opacity-50">Verified graduate</p>
          </div>
        </div>
        <h2 className="relative font-bold z-100 max-w-md text-lg">
          The team was very supportive and kept me motivated
        </h2>
        <p className="opacity-50 relative z-10">
          " I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I've made in myself"
        </p>
      </div>
      {/* box 3 */}
      <div className="md:row-span-2  hidden md:block text-gray-900 flex-flex-col bg-white p-6 rounded-lg space-y-3">
        <div className="flex space-x-3">
          <img
            src={Kira}
            alt=""
            className="h-12 w-12 rounded-full ring-2 ring-red-300"
          />
          <div>
            <h2 className="font-bold opacity-90">Kira Whittle</h2>
            <p className="opacity-50">Verified graduate</p>
          </div>
        </div>
        <h2 className="relative font-bold z-100 max-w-md text-lg">
          Such a life-changing experience
        </h2>
        <p className="opacity-50 relative z-10 line-clamp-[16]">
          " Before joining the bootcamp, I've never written a line of code. I
          needed some structure from professionals who can help me kearn
          programming step by step. I was encouraged to enroll by a former
          student if their who can only say wonderful things about the program.
          The entire curriculum and stuff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. It took my
          learning to the next level in a way that no tutorial coukd ever have.
          In fact, I;ve often reffered to it during interviews as an example of
          my development experience. It certainly helped me land a job as a
          full-stack developer after receiving multiple offers. 100% recommend!"
        </p>
      </div>
      {/* box 4 */}
      <div className="text-gray-900 flex-flex-col bg-white p-6 rounded-lg space-y-3">
        <div className="flex space-x-3">
          <img
            src={Jeanette}
            alt=""
            className="h-12 w-12 rounded-full ring-2 ring-red-300"
          />
          <div>
            <h2 className="font-bold opacity-90">Jeanette Harmon</h2>
            <p className="opacity-50">Verified graduate</p>
          </div>
        </div>
        <h2 className="relative font-bold z-100 max-w-md text-lg">
          An overall wonderful and rewarding experience
        </h2>
        <p className="opacity-50 relative z-10">
          " Thank you for the wonderfull experience! I now have a job I realy
          enjoy, and make a good living while something I love"
        </p>
      </div>
      {/* box 5 */}
      <div className="md:col-span-2 text-white flex-flex-col bg-gray-900 p-6 rounded-lg space-y-3">
        <div className="flex space-x-3">
          <img
            src={Patrick}
            alt=""
            className="h-12 w-12 rounded-full ring-2 ring-red-300"
          />
          <div>
            <h2 className="font-bold opacity-90">Patrick Abrams</h2>
            <p className="opacity-50">Verified graduate</p>
          </div>
        </div>
        <h2 className="relative font-bold z-100 max-w-md text-lg">
          Awesome teaching support from TAs who did the bootcamp themselves.
          Getting guidance from them and learning from their experience was
          easy.
        </h2>
        <p className="opacity-50 relative z-10 line-clamp-3">
          " The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal
          attention you need from an incredible community of smart and amazing
          people"
        </p>
      </div>
      {/* box 6 */}
      <div className="md:hidden text-gray-900 flex-flex-col bg-white p-6 rounded-lg space-y-3">
        <div className="flex space-x-3">
          <img
            src={Kira}
            alt=""
            className="h-12 w-12 rounded-full ring-2 ring-red-300"
          />
          <div>
            <h2 className="font-bold opacity-90">Kira Whittle</h2>
            <p className="opacity-50">Verified graduate</p>
          </div>
        </div>
        <h2 className="relative font-bold z-100 max-w-md text-lg">
          Such a life-changing experience
        </h2>
        <p className="opacity-50 relative z-10">
          " Before joining the bootcamp, I've never written a line of code. I
          needed some structure from professionals who can help me kearn
          programming step by step. I was encouraged to enroll by a former
          student if their who can only say wonderful things about the program.
          The entire curriculum and stuff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. It took my
          learning to the next level in a way that no tutorial coukd ever have.
          In fact, I;ve often reffered to it during interviews as an example of
          my development experience. It certainly helped me land a job as a
          full-stack developer after receiving multiple offers. 100% recommend!"
        </p>
      </div>
    </div>
  );
}
