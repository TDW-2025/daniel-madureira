import React from 'react';

export default function NewPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-4xl font-bold">ci/cd class</h1>
      <p className="text-center text-lg">Welcome to the new page!</p>
      <section className="m-2 text-center flex-col flex gap-2 justify-center">
        <Link href="/" className="mt-4 text-white p-2 rounded-xl bg-blue-500">
          Go back to HomePage
        </Link>
        <Link
          href="https://github.com/TDW-2025/daniel-madureira/actions"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-white p-2 rounded-xl bg-gray-800 text-center flex items-center gap-2 justify-center"
        >
          Check the <span className="font-bold">Lint</span>
          <br /> pipeline on <FaGithub />
        </Link>
    </div>
  );
}
