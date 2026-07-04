import { describe, it, expect } from "vitest"
import { mountSuspended } from "@nuxt/test-utils/runtime"
import Avatar from "../../app/components/Avatar.vue"

describe("Avatar", () => {
  it("should render the initial correctly", async () => {
    const wrapper = await mountSuspended(Avatar, {
      props: { initial: "A", bgColor: "pink" }
    })
    expect(wrapper.text()).toContain("A")
  })

  it("should apply the correct background color class", async () => {
    const wrapperPink = await mountSuspended(Avatar, {
      props: { initial: "A", bgColor: "pink" }
    })
    expect(wrapperPink.classes()).toContain("avatar-pink")

    const wrapperCyan = await mountSuspended(Avatar, {
      props: { initial: "B", bgColor: "cyan" }
    })
    expect(wrapperCyan.classes()).toContain("avatar-cyan")
  })
})
