import profile from "../../img/profile.jpg";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img
        src={profile}
        alt="profile"
        className="rounded-xl md:w-1/2 lg:w-1/3"
      />

      <div className="lg:px-20 md:px-10">
        <h1 className="text-3xl font-bold pt-10">Hello!</h1>
        <p className="pt-2 text-2xl font-thin leading-8 lg:leading-10 tracking-wide lg:tracking-widest">
          I'm <span className="font-bold">Shishir Shekhar</span> a passionate
          learner and aspiring full stack developer based in Bangalore.
        </p>
        <p className="text-2xl font-thin leading-8 lg:leading-10 tracking-wide lg:tracking-widest">
          My world revolves around coding and discovering new programming
          languages. Take a look at my projects and insightful blogs below. Stay
          tuned for updates on my exciting journey!
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
