import "./App.css";
import AvatarGroup from "./components/AvatarGroup";

function App() {
  const dummyDataFromTheServer = {
    people: [
      {
        alt: "Remy Sharp",
        name: "Remy Sharp",
        src: "https://mui.com/static/images/avatar/1.jpg",
      },
      {
        alt: "Travis Howard",
        name: "Travis Howard",
        src: "https://mui.com/static/images/avatar/1.jpg",
      },
      {
        alt: "Tomi Budi",
        name: "Tomi Budi",
        src: "",
      },
      {
        alt: "Trevor Henderson",
        name: "Trevor Henderson",
        src: "https://mui.com/static/images/avatar/1.jpg",
      },
    ],
    total: 4,
  };

  return (
    <div className="App">
      <AvatarGroup data={dummyDataFromTheServer} max={3} />
    </div>
  );
}

export default App;
