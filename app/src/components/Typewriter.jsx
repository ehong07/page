import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

function Typewriter({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  function type() {
    const currentWord = words[wordIndex];
    const shouldDelete = isDeleting ? 1 : -1;

    setText(current => currentWord.substring(0, current.length - shouldDelete));

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(type, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [wordIndex, isDeleting, text]);

  return (
    <div className="container">
      <h1>{text}</h1>
    </div>
  );
}

Typewriter.propTypes = {
  words: PropTypes.array.isRequired,
}

export default Typewriter;
