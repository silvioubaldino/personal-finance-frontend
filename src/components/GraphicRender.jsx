import '../style/components/graphicRender.css';
import graphicIMG from '../mocks/mockGraphic.png';

const GraphicRender = () => {
  return (
    <div className='container-graphic'>
      <img src={ graphicIMG } alt='grafico' />
    </div>
  );
};

export default GraphicRender;