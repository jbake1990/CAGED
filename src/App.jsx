import { useState } from 'react';
import { motion } from 'framer-motion';

const chords = {
  'C': ['x', '3', '2', '0', '1', '0'],
  'D': ['x', 'x', '0', '2', '3', '2'],
  'E': ['0', '2', '2', '1', '0', '0'],
  'F': ['1', '3', '3', '2', '1', '1'],
  'G': ['3', '2', '0', '0', '0', '3'],
  // Add more chords as needed...
};

function App() {
  const [key, setKey] = useState('C');
  const [progression, setProgression] = useState([1, 4, 5]);

  const getChordForNumber = (num) => {
    const chordKeys = Object.keys(chords);
    return chordKeys[(num - 1) % chordKeys.length];
  };

  return (
    <div className="h-screen bg-background flex justify-center items-center">
      <div className="text-center text-text">
        <h1 className="text-4xl mb-4">Guitar Chord Progression</h1>

        {/* Key Selector */}
        <select
          className="mb-4 p-2 bg-secondary text-background"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        >
          {Object.keys(chords).map((chord) => (
            <option key={chord} value={chord}>
              {chord}
            </option>
          ))}
        </select>

        {/* Chord Progression Input */}
        <div className="mb-4">
          <button
            className="px-4 py-2 m-2 bg-primary text-text"
            onClick={() => setProgression([1, 4, 5])}
          >
            Default Progression (I-IV-V)
          </button>
        </div>

        {/* Chord Display */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {progression.map((num, idx) => (
            <div key={idx} className="p-4">
              <h2 className="text-xl">{getChordForNumber(num)}</h2>
              <div className="text-lg font-mono">
                {chords[getChordForNumber(num)].map((fret, i) => (
                  <div key={i}>
                    String {i + 1}: {fret}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default App;
