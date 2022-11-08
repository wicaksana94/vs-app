export default function AvatarGroup(props) {
  const max = props.max;
  const total = props.data.total;
  const peopleData = props.data.people.slice(0, max);
  const surplusText = total - max;

  const getInitials = function (string) {
    var names = string.split(" "),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  const renderSurplusAvatar = () => {
    if (max < total) {
      return (
        <div className="flex items-center justify-center text-lg bg-gray-300 text-gray-500 font-semibold h-10 w-10 rounded-full ring-2 ring-white">
          +{surplusText}
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <div className="flex -space-x-2 overflow-hidden">
        {peopleData.map((item, index) => {
          if (item.src.length > 0) {
            return (
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src={item.src}
                alt={item.alt}
                key={index}
              />
            );
          } else {
            return (
              <div className="flex items-center justify-center text-lg bg-gray-300 text-gray-500 font-semibold h-10 w-10 rounded-full ring-2 ring-white">
                {getInitials(item.name)}
              </div>
            );
          }
        })}
        {renderSurplusAvatar()}
      </div>
    </>
  );
}
