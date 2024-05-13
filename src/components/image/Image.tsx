interface ImageInterface {
  image: string;
}

const Image: React.FC<ImageInterface> = ({ image }) => {
  return <img src={image} />;
};

export default Image;
