import { writable } from "svelte/store"

export const toDoItems = writable([
  {text: "ゴミ出し", status: true},
  {text: "プログラミング学習", status: false},
  {text: "友達に連絡", status: false}
])