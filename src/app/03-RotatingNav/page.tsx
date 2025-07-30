import Image from "next/image";

export default function RotatingNavPage() {
  return (
    <div className="max-w-5xl h-full my-14 mx-auto ">
      <h1 className="text-3xl">Amazing Article</h1>
      <span className="text-sm  italic text-gray-600">Florin Pop</span>
      <section className="my-4">
        Incididunt nostrud mollit mollit laborum aute pariatur sit dolor fugiat
        pariatur velit. Enim amet culpa consectetur cillum excepteur dolor esse
        culpa anim. Mollit eiusmod tempor consequat quis do et incididunt
        consequat amet Lorem aute. Ipsum ad incididunt elit cillum occaecat
        laborum eu anim Lorem ad cupidatat. Cupidatat incididunt eu adipisicing
        eu laborum aliqua qui laborum dolor commodo do cillum. Dolore pariatur
        anim proident excepteur fugiat aliqua incididunt magna. Anim et amet non
        officia velit ullamco nostrud mollit ex velit sint veniam ut.
      </section>
      <h2 className="text-xl my-5">My Dog</h2>
      <div className="relative w-full pt-[68%]">
        <Image
          alt="dog"
          objectFit=""
          fill
          unoptimized
          className="w-full h-full left-0 object-scale-cover z-0"
          src={
            "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          }
        />
      </div>
      <section className="my-5">
        Fugiat incididunt eiusmod ex excepteur quis incididunt exercitation.
        Proident id aliquip aliqua dolore velit. Ea adipisicing est ut enim non
        excepteur amet id commodo. Dolore non laboris tempor cillum laborum
        voluptate labore consequat voluptate. Commodo est ipsum nisi dolor
        exercitation proident Lorem aliquip officia ad adipisicing laborum sunt.
      </section>
    </div>
  );
}
