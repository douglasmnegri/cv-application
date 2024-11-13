function CurriculumTemplate() {
  return (
    <div className="flex justify-center py-10 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl shadow-lg border border-gray-200 bg-white">
        <div className="grid grid-rows-2">
          <div className="bg-pale-yellow text-black p-6 row-span-2">
            <h1 className="text-4xl font-bold mb-8">LISANDRO MILANESI</h1>
            <div className="text-sm font-bold uppercase">Profile</div>
            <p className="mt-4">
              Assistant Hotel Manager with a warm and friendly demeanor...
            </p>
          </div>

          <div className=" bg-light-yellow p-8 text-black">
            <div className="space-y-4 text-sm">
              <div className="font-bold uppercase">
                Activities and Interests
              </div>
              <ul className="list-disc pl-4">
                <li>Surfing</li>
                <li>Scuba diving</li>
                <li>Snorkeling</li>
                <li>Craft beer</li>
                <li>Travel</li>
                <li>Great food</li>
                <li>Food Pantry Volunteer</li>
              </ul>

              <div className="font-bold uppercase mt-8">Key Skills</div>
              <ul className="list-disc pl-4">
                <li>Budget management</li>
                <li>Excellent listener</li>
                <li>Friendly, courteous, & service-oriented</li>
                <li>Poised under pressure</li>
                <li>Staff training & coaching</li>
                <li>Recruiting & hiring talent</li>
                <li>Quality assurance</li>
                <li>Solid written & verbal communicator</li>
              </ul>
            </div>

            <div className="text-sm font-bold uppercase mt-8">
              Work Experience
            </div>
            <div className="mt-4 space-y-6">
              <div>
                <div className="font-semibold">Assistant Hotel Manager</div>
                <div>The Rosehip Hotel | Seattle, WA</div>
                <div>20XX – Present</div>
                <p className="mt-2">
                  Supervise hotel staff, improve staff performance through
                  training, etc.
                </p>
              </div>

              <div>
                <div className="font-semibold">Assistant Hotel Manager</div>
                <div>The Seattle Sea Home | Seattle, WA</div>
                <div>20XX – 20XX</div>
                <p className="mt-2">
                  Supervised and trained hotel staff and resolved staff
                  conflicts...
                </p>
              </div>
            </div>

            <div className="text-sm font-bold uppercase mt-8">Education</div>
            <p className="mt-4">
              Bachelor of Science in Hospitality Management
              <br />
              Bellows College, June 20XX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurriculumTemplate;
