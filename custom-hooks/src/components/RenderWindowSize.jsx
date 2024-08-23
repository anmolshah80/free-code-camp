import useWindowSize from 'hooks/useWindowResize';

const RenderWindowSize = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="window-resize-container">
      <h1>useWindowResize Hook</h1>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default RenderWindowSize;
