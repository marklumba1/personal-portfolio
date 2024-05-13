import ListItem from "./ListItem";

export interface Data {
  rightItem: string | JSX.Element;
  title: string;
  link: string;
  subTitle: string;
  description: string;
  badges: string[];
}
interface ListInterface {
  data: Data[];
  component: string;
}

const List: React.FC<ListInterface> = ({ data }) => {
  return (
    <div className="flex flex-col gap-10">
      {data.map((item, index: number) => {
        return (
          <ListItem
            rightItem={item.rightItem}
            title={item.title}
            link={item.link}
            subTitle={item.subTitle}
            description={item.description}
            badges={item.badges}
            elementId={index}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default List;
