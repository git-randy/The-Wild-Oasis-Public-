import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useAuth } from "~/app/_context/AuthContext";
import { signOutAction } from "~/app/_lib/actions";

function SignOutButton() {
  const { setUser } = useAuth();
  const router = useRouter()

  const handleSignOut = async () => {
    await signOutAction()
    setUser(undefined)
    router.replace("/")
  }

  return (
    <form action={handleSignOut}>
      <button
        className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100
      transition-colors flex items-center gap-4 font-semibold text-primary-200
      w-full"
      >
        <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-primary-600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
