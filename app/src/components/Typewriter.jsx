import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

function Typewriter({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCursorBlinking, setIsCursorBlinking] = useState(false);

  useEffect(() => {
    function type() {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting ? 1 : -1;

      setText(current => currentWord.substring(0, current.length - shouldDelete));

      if (!isDeleting && text === currentWord && wordIndex < words.length - 1) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex(prevIndex => prevIndex + 1);
      }
    }

    const typeTimeout = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(typeTimeout);
  }, [words, wordIndex, isDeleting, text]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      if (isCursorBlinking) {
        document.getElementById('cursor').style.opacity = 0;
        setIsCursorBlinking(false);
      } else {
        document.getElementById('cursor').style.opacity = 1;
        setIsCursorBlinking(true);
      }
    }, 500);
    return () => clearTimeout(blinkTimeout);
  }, [isCursorBlinking]);

  return (
    <div className="container">
      <div className="text-container">
        <h1>{text}<span id="cursor">|</span></h1>
      </div>
    </div>
  );
}

Typewriter.propTypes = {
  words: PropTypes.array.isRequired,
}

export default Typewriter;
