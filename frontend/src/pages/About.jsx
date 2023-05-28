import React from "react";
import Card from "../comopnents/card/Card";

const About = () => {
  return (
    <div className="flex flex-col px-52 py-5 gap-5 bg-white">
      <div className="flex flex-col bg-gray-100">
        <p className="text-gray-700 text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a
          impedit quam cumque deleniti vel officiis nesciunt accusamus,
          delectus, optio veniam blanditiis eveniet? Similique ut est fuga vitae
          maxime doloribus!
        </p>
        <p className="text-gray-700 text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a
          impedit quam cumque deleniti vel officiis nesciunt accusamus,
          delectus, optio veniam blanditiis eveniet? Similique ut est fuga vitae
          maxime doloribus!
        </p>
        <p className="text-gray-700 text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a
          impedit quam cumque deleniti vel officiis nesciunt accusamus,
          delectus, optio veniam blanditiis eveniet? Similique ut est fuga vitae
          maxime doloribus!
        </p>
        <p className="text-gray-700 text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a
          impedit quam cumque deleniti vel officiis nesciunt accusamus,
          delectus, optio veniam blanditiis eveniet? Similique ut est fuga vitae
          maxime doloribus!
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <Card
          title="Vission"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a
          impedit quam cumque deleniti vel officiis nesciunt accusamus,
          delectus, optio veniam blanditiis eveniet? Similique ut est fuga vitae
          maxime doloribus!"
        />
        <Card
          title="Mission"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a
          impedit quam cumque deleniti vel officiis nesciunt accusamus,
          delectus, optio veniam blanditiis eveniet? Similique ut est fuga vitae
          maxime doloribus!"
        />
      </div>
    </div>
  );
};

export default About;
