


import Tabs from "../ui/tabs.jsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export function TabsDemo() {
  const tabs = [
    {
      title: "CREDENZ",
      value: "credenz",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold border-2 border-blue-400 text-white bg-gradient-to-br from-sky-900 to-indigo-900">
          <p> Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "PISB",
      value: "pisb",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white  border-2 border-blue-400 bg-gradient-to-br from-sky-900 to-indigo-900">
          <p> tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "P.I.N.G",
      value: "ping",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white  border-2 border-blue-400 bg-gradient-to-br  from-sky-900 to-indigo-900">
          <p> tab</p>
          <DummyContent />
        </div>
      ),
    },
    // {
    //   title: "Content",
    //   value: "content",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p>Content tab</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
    // {
    //   title: "Random",
    //   value: "random",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p>Random tab</p>
    //       <DummyContent />
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <LazyLoadImage
      src="/linear.webp"
      alt="dummy LazyLoadImage"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
