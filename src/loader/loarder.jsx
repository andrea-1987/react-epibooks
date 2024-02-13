import { Spinner } from "@material-tailwind/react";
 
export function Loader() {
  return (
    <div className="flex gap-8">
      <Spinner color="amber" />
    </div>
  );
}