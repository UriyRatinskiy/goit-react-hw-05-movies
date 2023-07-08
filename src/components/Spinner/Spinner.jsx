import { Circles } from 'react-loader-spinner';
import css from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.spinner}>
        <Circles
          height="80"
          width="80"
          color="#808080"
          ariaLabel="circles-loading"
        />
      </div>
    </div>
  );
};

export default Spinner;
