import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AvatarGroup from "../components/AvatarGroup";

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

describe("AvatarGroup test", () => {
  test("should show title all the time", () => {
    render(
      <AvatarGroup data={dummyDataFromTheServer} maxLength={3} size="lg" />
    );

    expect(screen.get(/Testing/i)).toBeDefined();
  });

  test("renders the correct style for success", () => {
    const type = "success";
    const wrapper = mount(notification, {
      props: { type },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["notification--success"])
    );
  });
});
