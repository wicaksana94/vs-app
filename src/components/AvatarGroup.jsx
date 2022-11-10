function AvatarGroup(props) {
  const max = props.maxLength;
  const total = props.data.total;
  const peopleData = props.data.people.slice(0, max);
  const surplusText = total - max;

  const setSize = () => {
    switch (props.size) {
      case "xs":
        return "h-4 w-4";
      case "sm":
        return "h-6 w-6";
      case "md":
        return "h-8 w-8";
      case "lg":
        return "h-10 w-10";

      default:
        return "h-4 w-4";
    }
  };

  const getInitials = function (string) {
    const names = string.split(" ");
    const firstName = names[0];
    let initials = "";

    if (firstName.length > 2) {
      initials = `${firstName[0].toUpperCase()}${firstName[2].toUpperCase()}`;
    } else {
      initials = firstName.toUpperCase();
    }

    return initials;
  };

  const renderSurplusAvatar = () => {
    if (max < total) {
      return (
        <div
          className={`${setSize()}  flex items-center justify-center text-${
            props.size
          } bg-gray-300 text-gray-500 font-semibold rounded-full ring-2 ring-white`}
        >
          +{surplusText}
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="avatar-group">
      <div className="flex -space-x-2 overflow-hidden">
        {peopleData.map((item, index) => {
          if (item.src.length > 0) {
            return (
              <img
                className={`${setSize()} inline-block rounded-full ring-2 ring-white`}
                src={item.src}
                alt={item.alt}
                key={index}
              />
            );
          } else {
            return (
              <div
                key={index}
                className={`${setSize()} flex items-center justify-center text-${
                  props.size
                } bg-gray-300 text-gray-500 font-semibold rounded-full ring-2 ring-white`}
              >
                {getInitials(item.name)}
              </div>
            );
          }
        })}
        {renderSurplusAvatar()}
      </div>
    </div>
  );
}

export default AvatarGroup