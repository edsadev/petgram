import { useRouter } from "next/router";
import PhotoCardWithQuery from "@components/PhotoCardWithQuery";
import MainLayout from "@layouts/MainLayout";

export default function Detail(){
  const router = useRouter();
  const id = router.query.id;
  return (
    <MainLayout>
      <PhotoCardWithQuery id={id}/>
    </MainLayout>
  )
}