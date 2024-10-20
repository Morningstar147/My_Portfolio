import React from 'react';
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

type SubmitBtnProps = {
  text: string;
};

export default function SubmitBtn( { text }: SubmitBtnProps ) {
  const { pending } = useFormStatus
  return (
    <button
    type="submit"
    className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] button'
    disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border"
      ) : (
        <>
        {text}{""}
        <FaPaperPlane className="text-sx opacity-70 transition-all group-hover:" />
        </>
      )}

    </button>
  );
}

