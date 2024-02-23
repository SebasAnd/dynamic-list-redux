import Image from "next/image";
import CustomList from "./components/CustomList";
import axios from "axios";

export default async function Home() {
  let initialList: any[] = [];
  async function InitialCall() {
    await axios
      .get("https://rickandmortyapi.com/api/character")
      .then(function (response) {
        initialList = response.data.results;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  await InitialCall();
  return (
    <>
      <CustomList IList={initialList}></CustomList>
    </>
  );
}
