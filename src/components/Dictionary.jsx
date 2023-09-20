import { useState } from "react";

const Dictionary = ({ data }) => {
  if (!data || data.length === 0 || !data[0]?.word) {
    return null;
  }

  const phoneticWithAudio = data[0].phonetics.find(
    (phonetic) => phonetic.audio
  );

  const audio = phoneticWithAudio ? new Audio(phoneticWithAudio.audio) : null;

  const handlePlayClick = () => {
    if (audio) {
      audio.play();
    }
  };

  return (
    <>
      <div className="flex mt-6 justify-between items-center">
        <div>
          <h1 className="font-bold text-3xl text-app-black-3 dark:text-white">
            {data[0].word}
          </h1>
          <h5 className="text-lg text-app-purple">{data[0].phonetic}</h5>
        </div>
        <svg
          onClick={handlePlayClick}
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 75 75"
        >
          <g fill="#A445ED" fill-rule="evenodd">
            <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
            <path d="M29 27v21l21-10.5z" />
          </g>
        </svg>
      </div>
      <div className="flex items-center mt-4">
        <h5 className="dark:text-white text-app-black-3 text-lg italic font-bold">
          noun
        </h5>
        <div className="bg-app-black-4 ml-4 h-[1px] w-full"></div>
      </div>
      <div className="mt-4">
        <h6 className="text-app-grey-1">Meaning</h6>
        <ul className="mt-4 marker:text-app-purple list-outside">
          {data[0].meanings[0].definitions.map((definition, index) => (
            <li className="dark:text-white text-app-black-3 mt-6" key={index}>
              <div className="flex">
                <span className="mr-6 text-app-purple">•</span>
                {definition.definition}
              </div>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 mt-6">
          <p className="text-app-grey-1">Synonyms</p>
          {data[0].meanings[0].synonyms.map((synonym, index) => (
            <p className="text-app-purple" key={index}>
              {synonym}
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center mt-4">
        <h5 className="dark:text-white text-app-black-3 text-lg italic font-bold">
          verb
        </h5>
        <div className="bg-app-black-4 ml-4 h-[1px] w-full"></div>
      </div>
      <div className="mt-4">
        <h6 className="text-app-grey-1">Meaning</h6>
        <ul className="mt-4 marker:text-app-purple list-outside">
          {data[0].meanings[0].definitions.map((definition, index) => (
            <li className="dark:text-white text-app-black-3" key={index}>
              <div className="flex">
                <span className="mr-6 text-app-purple">•</span>
                {definition.definition}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="bg-app-black-4 h-[1px] w-full mt-9"></div>
        <h6 className="text-app-grey-1 text-sm underline mt-6">Source</h6>
        <a
          href={data[0].sourceUrls}
          className="dark:text-white text-app-black-3 mt-2 text-sm"
        >
          {data[0].sourceUrls}
        </a>
      </div>
    </>
  );
};

export default Dictionary;
