import ListItem from "./ListItem";

interface GenericObject {
  [key: string]: any;
}
interface ListInterface {
  data: GenericObject[];
  component: string;
}

const List: React.FC<ListInterface> = ({ data, component }) => {
  return (
    <div className="flex flex-col gap-6">
      {component === "exp" &&
        data.map((item, index: number) => {
          return (
            <ListItem
              rightItem={item.date}
              title={item.company}
              link={item.companyLink}
              subTitle={item.position}
              description={item.description}
              badges={item.techs}
              elementId={index}
            />
          );
        })}
    </div>
  );
};

export default List;
