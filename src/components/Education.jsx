function Education() {
  return (
    <section id="education" className=" pt-5">
      <div className="container mx-auto">
        <h2 className="text-gray-300 text-2xl font-bold">Education</h2>
        <div className="mt-2 text-gray-300/85 flex flex-col gap-5">
          <div className="flex flex-col gap-2 p-3 rounded">
            <div>
              <p>2021 - 2024</p>
              <p>Ravenshaw University</p>
            </div>
            <p className="text-sm">
              B.Sc. in Information Technology and Management (87.13%): During my
              studies, I developed several full-stack projects that strengthened
              my theoretical knowledge and practical skills across various
              technologies and frameworks. These projects involved front-end
              development with React.js, back-end development using Node.js and
              MongoDB, and integrating cloud services like Firebase. They
              showcased my ability to create, develop, and deploy robust
              applications, laying a solid foundation for my career in
              technology.
            </p>
          </div>
          <div className="flex flex-col gap-2 p-3 rounded">
            <div>
              <p>2019 - 2021</p>
              <p>Ravenshaw Higher Secondary School</p>
            </div>
            <p className="text-sm">12th CHSE Board (94%)</p>
          </div>
          <div className="flex flex-col gap-2 p-3 rounded">
            <div>
              <p>2008 - 2019</p>
              <p>Saraswati Vidya Mandir</p>
            </div>
            <p className="text-sm">10th BSE Board (91.67%)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
