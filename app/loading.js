import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <Loader name={"Dashboard"} />
    </div>
  );
}
