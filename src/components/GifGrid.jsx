import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem, Spinner } from '../components';

export const GifGrid = ({ categoryName }) => {
  const { images, isLoading } = useFetchGifs(categoryName);

  return (
    <>
      <h3 className='mb-5 capitalize font-mono'>{categoryName}</h3>

      {
        isLoading && <Spinner />
      }

      <>
        <div className='card-grid'>
          {images?.map(
            ({
              id,
              title,
              images: {
                downsized_medium: { url },
              },
            }) => (
              <GifItem key={id} title={title} url={url} />
            )
          )}
        </div>
      </>
    </>
  );
};

