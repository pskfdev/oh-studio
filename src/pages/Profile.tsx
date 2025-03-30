import { useEffect } from "react";

function Profile() {
  useEffect(() => {
    document.title = "Profile | HO.STUDIO";
  }, []);

  return (
    <section className="w-full h-[60vh] text-center flex justify-center items-center opacity-0 animate-[fadeInUp_0.7s_ease-out_forwards]">
      <div className="space-y-2">
        <h1>Hey 👋🏼 I'm Oli</h1>
      </div>
    </section>
  );
}

export default Profile;
