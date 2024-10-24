import { useEffect } from 'react';
import './index.css';
import { generateSpaceLayer } from '../../utils/utils';

const StarField = () => {
  useEffect(() => {
    generateSpaceLayer("2px", ".space-1", 250, "25s");
    generateSpaceLayer("3px", ".space-2", 100, "20s");
    generateSpaceLayer("6px", ".space-3", 25, "15s");
  }, []);

  return (
    <div className="space-container">
      <div className="space space-1"></div>
      <div className="space space-2"></div>
      <div className="space space-3"></div>
    </div>
  );
};

export default StarField;