import Image from "next/image";
import Link from "next/link";
// import { db } from "@/db"; 이걸 왜 못가져오는지???
import { items } from "@/db/schema/items";

export default function GridItems() {
  return <div className="grid grid-cols-3 gap-4">hi</div>;
}
