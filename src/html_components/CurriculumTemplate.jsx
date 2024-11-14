function CurriculumTemplate() {
  return (
    <div className="flex justify-center py-10 bg-gray-100 min-h-screen">
      <div className="w-4/5 h-full max-w-4xl shadow-lg border border-gray-200 bg-white">
        <div className="grid grid-rows-3">
          <div className="bg-pale-yellow text-black p-6 row-span-1 flex justify-center items-center">
            <div>
              <h1 className="text-4xl font-bold mb-8 text-black mr-12">
                LISANDRO MILANESI
              </h1>
            </div>
            <div className="text-sm">
              <h2 className="text-black font-bold uppercase w-4/5">Profile</h2>
              <p className="mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia necessitatibus aut accusamus! Adipisci voluptas cumque
                deserunt delectus repellat temporibus voluptates nam vel nisi
                sequi doloribus sit alias illo, illum officia.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 bg-light-yellow p-8 text-black row-span-2">
            <div className="space-y-4 text-md col-span-1">
              <div className="font-bold uppercase">Languages</div>
              <ul className="list-disc pl-4 p-8">
                <li>English</li>
                <li>Portuguese</li>
                <li>Spanish</li>
              </ul>

              <div className="font-bold uppercase mt-8">Key Skills</div>
              <ul className="list-disc pl-4">
                <li>Budget management</li>
                <li>Excellent listener</li>
                <li>Friendly, courteous, service-oriented</li>
                <li>Poised under pressure</li>
                <li>Staff training & coaching</li>
                <li>Recruiting & hiring talent</li>
                <li>Quality assurance</li>
                <li>Solid written & verbal communicator</li>
              </ul>
            </div>

            <div className="col-span-2 ml-4">
              <div className="text-lg font-bold uppercase">Work Experience</div>
              <div className="mt-4 space-y-6">
                <div>
                  <div className="font-semibold">Assistant Hotel Manager</div>
                  <div>The Rosehip Hotel | Seattle, WA</div>
                  <div>20XX – Present</div>
                  <p className="mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi incidunt numquam ipsum omnis officiis atque
                    obcaecati asperiores? Et, eius beatae consequatur laborum
                    ut, architecto dolores quidem iste sed sint eligendi!
                  </p>
                </div>

                <div>
                  <div className="font-semibold">Assistant Hotel Manager</div>
                  <div>The Seattle Sea Home | Seattle, WA</div>
                  <div>20XX – 20XX</div>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fuga labore, possimus quam saepe enim error ea mollitia
                    impedit praesentium cumque maiores nostrum. Accusamus sequi
                    ab placeat itaque nostrum ea quia!
                  </p>
                </div>
              </div>

              <div className="text-md font-bold uppercase mt-8">Education</div>
              <p className="mt-4">
                Bachelor of Science in Hospitality Management
                <br />
                Bellows College, June 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurriculumTemplate;
