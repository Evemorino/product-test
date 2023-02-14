import request from "axios";
import type { Menu, Product, Out, Enter } from "@/types";

export async function obtainMenu() {
  return (await (
    await request.get("/json/Menu.json")
  ).data.data) as Menu[];
}

export async function obtainProduct() {
  return (await (
    await request.get("/json/Product.json")
  ).data.data) as Product[];
}

export async function obtainEnter() {
  return (await (
    await request.get("/json/Enter.json")
  ).data.data) as Enter[];
}

export async function obtainOut() {
  return (await (
    await request.get("/json/Out.json")
  ).data.data) as Out[];
}
